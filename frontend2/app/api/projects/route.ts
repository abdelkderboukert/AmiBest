import { NextResponse } from "next/server"
import { db } from "@/lib/firebase"
import { collection, getDocs, query, orderBy, where } from "firebase/firestore"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const featured = searchParams.get("featured") === "true"

    let projectsQuery = query(collection(db, "projects"), orderBy("createdAt", "desc"))

    if (category) {
      projectsQuery = query(collection(db, "projects"), where("category", "==", category), orderBy("createdAt", "desc"))
    }

    if (featured) {
      projectsQuery = query(collection(db, "projects"), where("featured", "==", true), orderBy("createdAt", "desc"))
    }

    const querySnapshot = await getDocs(projectsQuery)

    const projects = []
    querySnapshot.forEach((doc) => {
      projects.push({ id: doc.id, ...doc.data() })
    })

    return NextResponse.json({ projects })
  } catch (error) {
    console.error("Error fetching projects:", error)
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 })
  }
}
