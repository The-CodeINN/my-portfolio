import { getProjects } from "@/sanity/sanity-util"

export default async function Home() {

  const projects = await getProjects()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {projects.map((project) => (
        <div key={project._id}>{project.title}</div>
      ))} 
    </main>
  )
}
