"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Trash2,
  PencilLine,
  Plus,
  LogOut,
  Loader2,
  Search,
  AlertTriangle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { auth, db, storage } from "@/lib/firebase";

// Only import Firebase functions if Firebase is properly initialized
let signInWithEmailAndPassword: any = null;
let signOut: any = null;
let collection: any = null;
let addDoc: any = null;
let updateDoc: any = null;
let deleteDoc: any = null;
let doc: any = null;
let getDocs: any = null;
let query: any = null;
let orderBy: any = null;
let ref: any = null;
let uploadBytes: any = null;
let getDownloadURL: any = null;
let deleteObject: any = null;

if (auth && db && storage) {
  import("firebase/auth").then((authModule) => {
    signInWithEmailAndPassword = authModule.signInWithEmailAndPassword;
    signOut = authModule.signOut;
  });

  import("firebase/firestore").then((firestoreModule) => {
    collection = firestoreModule.collection;
    addDoc = firestoreModule.addDoc;
    updateDoc = firestoreModule.updateDoc;
    deleteDoc = firestoreModule.deleteDoc;
    doc = firestoreModule.doc;
    getDocs = firestoreModule.getDocs;
    query = firestoreModule.query;
    orderBy = firestoreModule.orderBy;
  });

  import("firebase/storage").then((storageModule) => {
    ref = storageModule.ref;
    uploadBytes = storageModule.uploadBytes;
    getDownloadURL = storageModule.getDownloadURL;
    deleteObject = storageModule.deleteObject;
  });
}

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  featured: boolean;
  createdAt: any;
}

export default function AdminPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    featured: false,
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [firebaseError, setFirebaseError] = useState<string | null>(null);

  // Check if Firebase is properly configured
  useEffect(() => {
    if (!auth || !db || !storage) {
      setFirebaseError(
        "Firebase is not properly configured. Please check your environment variables."
      );
      setIsLoading(false);
      return;
    }

    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      setIsAuthenticated(!!user);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Fetch projects
  useEffect(() => {
    if (isAuthenticated && db && !firebaseError) {
      fetchProjects();
    }
  }, [isAuthenticated]);

  // Filter projects based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(
        (project) =>
          project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProjects(filtered);
    }
  }, [searchQuery, projects]);

  const fetchProjects = async () => {
    if (!db || !collection || !query || !orderBy || !getDocs) {
      setError("Database functions not available");
      return;
    }

    try {
      setIsLoading(true);
      const projectsQuery = query(
        collection(db, "projects"),
        orderBy("createdAt", "desc")
      );
      const querySnapshot = await getDocs(projectsQuery);

      const fetchedProjects: Project[] = [];
      querySnapshot.forEach((doc: any) => {
        fetchedProjects.push({ id: doc.id, ...doc.data() } as Project);
      });

      setProjects(fetchedProjects);
      setFilteredProjects(fetchedProjects);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setError("Failed to load projects. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!auth || !signInWithEmailAndPassword) {
      setError(
        "Authentication not available. Please check Firebase configuration."
      );
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsAuthenticated(true);
    } catch (error: any) {
      console.error("Login error:", error);
      setError("Invalid email or password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    if (!auth || !signOut) {
      setError("Authentication not available");
      return;
    }

    try {
      await signOut(auth);
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      category: "",
      description: "",
      featured: false,
    });
    setImageFile(null);
    setImagePreview(null);
    setCurrentProject(null);
  };

  const openAddDialog = () => {
    resetForm();
    setIsAddDialogOpen(true);
  };

  const openEditDialog = (project: Project) => {
    setCurrentProject(project);
    setFormData({
      title: project.title,
      category: project.category,
      description: project.description,
      featured: project.featured || false,
    });
    setImagePreview(project.imageUrl);
    setIsEditDialogOpen(true);
  };

  const openDeleteDialog = (project: Project) => {
    setCurrentProject(project);
    setIsDeleteDialogOpen(true);
  };

  const handleAddProject = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !storage ||
      !db ||
      !ref ||
      !uploadBytes ||
      !getDownloadURL ||
      !addDoc ||
      !collection
    ) {
      setError("Storage or database functions not available");
      return;
    }

    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      if (!imageFile) {
        throw new Error("Please select an image for the project");
      }

      // Upload image to Firebase Storage
      const storageRef = ref(
        storage,
        `projects/${Date.now()}_${imageFile.name}`
      );
      await uploadBytes(storageRef, imageFile);
      const imageUrl = await getDownloadURL(storageRef);

      // Add project to Firestore
      const projectData = {
        ...formData,
        imageUrl,
        createdAt: new Date(),
      };

      await addDoc(collection(db, "projects"), projectData);

      setSuccess("Project added successfully!");
      setIsAddDialogOpen(false);
      resetForm();
      fetchProjects();
    } catch (error: any) {
      console.error("Error adding project:", error);
      setError(error.message || "Failed to add project. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEditProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentProject || !db || !doc || !updateDoc) {
      setError("Database functions not available");
      return;
    }

    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      let imageUrl = currentProject.imageUrl;

      // If a new image is selected, upload it and update the URL
      if (
        imageFile &&
        storage &&
        ref &&
        uploadBytes &&
        getDownloadURL &&
        deleteObject
      ) {
        // Delete old image if it exists
        if (currentProject.imageUrl) {
          try {
            const oldImageRef = ref(storage, currentProject.imageUrl);
            await deleteObject(oldImageRef);
          } catch (error) {
            console.error("Error deleting old image:", error);
            // Continue with the update even if old image deletion fails
          }
        }

        // Upload new image
        const storageRef = ref(
          storage,
          `projects/${Date.now()}_${imageFile.name}`
        );
        await uploadBytes(storageRef, imageFile);
        imageUrl = await getDownloadURL(storageRef);
      }

      // Update project in Firestore
      const projectRef = doc(db, "projects", currentProject.id);
      await updateDoc(projectRef, {
        ...formData,
        imageUrl,
        updatedAt: new Date(),
      });

      setSuccess("Project updated successfully!");
      setIsEditDialogOpen(false);
      resetForm();
      fetchProjects();
    } catch (error: any) {
      console.error("Error updating project:", error);
      setError(error.message || "Failed to update project. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteProject = async () => {
    if (!currentProject || !db || !doc || !deleteDoc) {
      setError("Database functions not available");
      return;
    }

    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      // Delete image from storage
      if (currentProject.imageUrl && storage && ref && deleteObject) {
        try {
          const imageRef = ref(storage, currentProject.imageUrl);
          await deleteObject(imageRef);
        } catch (error) {
          console.error("Error deleting image:", error);
          // Continue with deletion even if image deletion fails
        }
      }

      // Delete project from Firestore
      await deleteDoc(doc(db, "projects", currentProject.id));

      setSuccess("Project deleted successfully!");
      setIsDeleteDialogOpen(false);
      setCurrentProject(null);
      fetchProjects();
    } catch (error: any) {
      console.error("Error deleting project:", error);
      setError(error.message || "Failed to delete project. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Show Firebase configuration error
  if (firebaseError) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-full max-w-md p-8 space-y-8 service-card rounded-lg">
          <div className="text-center">
            <AlertTriangle className="mx-auto h-12 w-12 text-red-500" />
            <h2 className="mt-6 text-3xl font-bold text-black">
              Configuration Error
            </h2>
            <p className="mt-2 text-sm text-black/70">
              Firebase is not properly configured
            </p>
          </div>

          <Alert variant="destructive">
            <AlertDescription>{firebaseError}</AlertDescription>
          </Alert>

          <div className="space-y-4">
            <p className="text-black/70 text-sm">
              Please ensure you have set up the following environment variables:
            </p>
            <ul className="text-black/60 text-xs space-y-1">
              <li>• NEXT_PUBLIC_FIREBASE_API_KEY</li>
              <li>• NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN</li>
              <li>• NEXT_PUBLIC_FIREBASE_PROJECT_ID</li>
              <li>• NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET</li>
              <li>• NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID</li>
              <li>• NEXT_PUBLIC_FIREBASE_APP_ID</li>
            </ul>
          </div>

          <div className="text-center mt-4">
            <Link href="/" className="text-sm text-black/70 hover:text-black">
              Return to website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading && !isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 text-primary animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-full max-w-md p-8 space-y-8 service-card rounded-lg">
          <div className="text-center">
            <Building2 className="mx-auto h-12 w-12 text-primary" />
            <h2 className="mt-6 text-3xl font-bold text-black">Admin Login</h2>
            <p className="mt-2 text-sm text-black/70">
              Sign in to access the admin dashboard
            </p>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black"
                >
                  Email address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-black"
                >
                  Password
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>

            <div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                ) : null}
                Sign in
              </Button>
            </div>
          </form>

          <div className="text-center mt-4">
            <Link href="/" className="text-sm text-black/70 hover:text-black">
              Return to website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-black">
              Admin Dashboard
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm text-black/70 hover:text-black">
              View Website
            </Link>
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="gap-2"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8">
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {success && (
          <Alert className="mb-6 border-green-500 bg-green-500/10">
            <AlertDescription className="text-green-500">
              {success}
            </AlertDescription>
          </Alert>
        )}

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-black">
              Project Management
            </h1>
            <p className="text-black/70 mt-1">
              Add, edit, or remove projects from your portfolio
            </p>
          </div>
          <Button
            onClick={openAddDialog}
            className="bg-primary hover:bg-primary/90 gap-2"
          >
            <Plus className="h-4 w-4" />
            Add New Project
          </Button>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-black/50" />
            <Input
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8 tabs-list">
            <TabsTrigger value="all" className="tabs-trigger">
              All Projects
            </TabsTrigger>
            <TabsTrigger value="featured" className="tabs-trigger">
              Featured
            </TabsTrigger>
            <TabsTrigger value="infrastructure" className="tabs-trigger">
              Infrastructure
            </TabsTrigger>
            <TabsTrigger value="commercial" className="tabs-trigger">
              Commercial
            </TabsTrigger>
            <TabsTrigger value="residential" className="tabs-trigger">
              Residential
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <ProjectList
              projects={filteredProjects}
              onEdit={openEditDialog}
              onDelete={openDeleteDialog}
              isLoading={isLoading}
            />
          </TabsContent>

          <TabsContent value="featured" className="mt-0">
            <ProjectList
              projects={filteredProjects.filter((p) => p.featured)}
              onEdit={openEditDialog}
              onDelete={openDeleteDialog}
              isLoading={isLoading}
            />
          </TabsContent>

          <TabsContent value="infrastructure" className="mt-0">
            <ProjectList
              projects={filteredProjects.filter(
                (p) => p.category.toLowerCase() === "infrastructure"
              )}
              onEdit={openEditDialog}
              onDelete={openDeleteDialog}
              isLoading={isLoading}
            />
          </TabsContent>

          <TabsContent value="commercial" className="mt-0">
            <ProjectList
              projects={filteredProjects.filter(
                (p) => p.category.toLowerCase() === "commercial"
              )}
              onEdit={openEditDialog}
              onDelete={openDeleteDialog}
              isLoading={isLoading}
            />
          </TabsContent>

          <TabsContent value="residential" className="mt-0">
            <ProjectList
              projects={filteredProjects.filter(
                (p) => p.category.toLowerCase() === "residential"
              )}
              onEdit={openEditDialog}
              onDelete={openDeleteDialog}
              isLoading={isLoading}
            />
          </TabsContent>
        </Tabs>
      </main>

      {/* Add Project Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[600px] bg-background border-white/10">
          <DialogHeader>
            <DialogTitle className="text-black">Add New Project</DialogTitle>
            <DialogDescription className="text-black/70">
              Fill in the details below to add a new project to your portfolio.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleAddProject}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label
                  htmlFor="title"
                  className="text-right text-black text-sm"
                >
                  Title
                </label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="col-span-3"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label
                  htmlFor="category"
                  className="text-right text-black text-sm"
                >
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="col-span-3 flex h-10 w-full rounded-md border border-white/10 bg-background px-3 py-2 text-sm text-black"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="Infrastructure">Infrastructure</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Residential">Residential</option>
                </select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label
                  htmlFor="description"
                  className="text-right text-black text-sm"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="col-span-3 flex min-h-[100px] w-full rounded-md border border-white/10 bg-background px-3 py-2 text-sm text-black"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label
                  htmlFor="featured"
                  className="text-right text-black text-sm"
                >
                  Featured
                </label>
                <div className="col-span-3 flex items-center">
                  <input
                    type="checkbox"
                    id="featured"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleInputChange}
                    className="h-4 w-4 rounded border-white/10 bg-background text-primary"
                  />
                  <label
                    htmlFor="featured"
                    className="ml-2 text-sm text-black/70"
                  >
                    Mark as featured project
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label
                  htmlFor="image"
                  className="text-right text-black text-sm"
                >
                  Image
                </label>
                <div className="col-span-3">
                  <Input
                    id="image"
                    name="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="cursor-pointer"
                    required
                  />
                  {imagePreview && (
                    <div className="mt-4 relative h-40 rounded-md overflow-hidden">
                      <Image
                        src={imagePreview || "/placeholder.svg"}
                        alt="Project preview"
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsAddDialogOpen(false)}
                className="border-white/10 text-black"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                ) : null}
                Add Project
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Edit Project Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[600px] bg-background border-white/10">
          <DialogHeader>
            <DialogTitle className="text-black">Edit Project</DialogTitle>
            <DialogDescription className="text-black/70">
              Update the project details below.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleEditProject}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label
                  htmlFor="edit-title"
                  className="text-right text-black text-sm"
                >
                  Title
                </label>
                <Input
                  id="edit-title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="col-span-3"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label
                  htmlFor="edit-category"
                  className="text-right text-black text-sm"
                >
                  Category
                </label>
                <select
                  id="edit-category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="col-span-3 flex h-10 w-full rounded-md border border-white/10 bg-background px-3 py-2 text-sm text-black"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="Infrastructure">Infrastructure</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Residential">Residential</option>
                </select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label
                  htmlFor="edit-description"
                  className="text-right text-black text-sm"
                >
                  Description
                </label>
                <textarea
                  id="edit-description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="col-span-3 flex min-h-[100px] w-full rounded-md border border-white/10 bg-background px-3 py-2 text-sm text-black"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label
                  htmlFor="edit-featured"
                  className="text-right text-black text-sm"
                >
                  Featured
                </label>
                <div className="col-span-3 flex items-center">
                  <input
                    type="checkbox"
                    id="edit-featured"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleInputChange}
                    className="h-4 w-4 rounded border-white/10 bg-background text-primary"
                  />
                  <label
                    htmlFor="edit-featured"
                    className="ml-2 text-sm text-black/70"
                  >
                    Mark as featured project
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label
                  htmlFor="edit-image"
                  className="text-right text-black text-sm"
                >
                  Image
                </label>
                <div className="col-span-3">
                  <Input
                    id="edit-image"
                    name="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="cursor-pointer"
                  />
                  <p className="text-xs text-black/50 mt-1">
                    Leave empty to keep the current image
                  </p>
                  {imagePreview && (
                    <div className="mt-4 relative h-40 rounded-md overflow-hidden">
                      <Image
                        src={imagePreview || "/placeholder.svg"}
                        alt="Project preview"
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsEditDialogOpen(false)}
                className="border-white/10 text-black"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                ) : null}
                Update Project
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[500px] bg-background border-white/10">
          <DialogHeader>
            <DialogTitle className="text-black">Confirm Deletion</DialogTitle>
            <DialogDescription className="text-black/70">
              Are you sure you want to delete this project? This action cannot
              be undone.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            {currentProject && (
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                  <Image
                    src={currentProject.imageUrl || "/placeholder.svg"}
                    alt={currentProject.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-black">
                    {currentProject.title}
                  </h4>
                  <p className="text-sm text-black/70">
                    {currentProject.category}
                  </p>
                </div>
              </div>
            )}
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(false)}
              className="border-white/10 text-black"
            >
              Cancel
            </Button>
            <Button
              type="button"
              variant="destructive"
              onClick={handleDeleteProject}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              ) : null}
              Delete Project
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

interface ProjectListProps {
  projects: Project[];
  onEdit: (project: Project) => void;
  onDelete: (project: Project) => void;
  isLoading: boolean;
}

function ProjectList({
  projects,
  onEdit,
  onDelete,
  isLoading,
}: ProjectListProps) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 text-primary animate-spin" />
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-black/70">No projects found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Card key={project.id} className="service-card overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src={project.imageUrl || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
            <div className="absolute top-2 right-2 flex gap-2">
              <Button
                size="icon"
                variant="outline"
                className="h-8 w-8 rounded-full bg-black/50 border-white/10 hover:bg-black/70"
                onClick={() => onEdit(project)}
              >
                <PencilLine className="h-4 w-4 text-black" />
                <span className="sr-only">Edit</span>
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="h-8 w-8 rounded-full bg-black/50 border-white/10 hover:bg-black/70"
                onClick={() => onDelete(project)}
              >
                <Trash2 className="h-4 w-4 text-black" />
                <span className="sr-only">Delete</span>
              </Button>
            </div>
            <div className="absolute top-2 left-2">
              <Badge className="bg-primary text-black">
                {project.category}
              </Badge>
              {project.featured && (
                <Badge className="ml-2 bg-yellow-500/80 text-black">
                  Featured
                </Badge>
              )}
            </div>
          </div>
          <CardContent className="p-4">
            <h3 className="font-bold text-lg mb-1 text-black">
              {project.title}
            </h3>
            <p className="text-black/70 text-sm line-clamp-2">
              {project.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
