"use client"

import { useState } from "react"

interface Lesson {
  id: string
  title: string
  description: string
  duration: string
  instructor: string
  type: "video" | "pdf" | "link"
  content: string
  thumbnail?: string
}

const sampleLessons: Lesson[] = [
  {
    id: "1",
    title: "Introduction to React Hooks",
    description: "Learn the fundamentals of React Hooks including useState, useEffect, and custom hooks.",
    duration: "25 min",
    instructor: "Sarah Johnson",
    type: "video",
    content: "https://www.youtube.com/watch?v=O6P86uwfdR0",
    thumbnail: "/react-hooks-tutorial.png",
  },
  {
    id: "2",
    title: "TypeScript Best Practices Guide",
    description: "Comprehensive guide covering TypeScript patterns, types, and advanced features.",
    duration: "15 min read",
    instructor: "Mike Chen",
    type: "pdf",
    content: "https://www.typescriptlang.org/docs/handbook/intro.html",
  },
  {
    id: "3",
    title: "Advanced CSS Grid Layouts",
    description: "Interactive examples and exercises for mastering CSS Grid layout system.",
    duration: "Interactive",
    instructor: "Emma Davis",
    type: "link",
    content: "https://css-tricks.com/snippets/css/complete-guide-grid/",
  },
  {
    id: "4",
    title: "Next.js Performance Optimization",
    description: "Deep dive into Next.js performance techniques and best practices.",
    duration: "32 min",
    instructor: "Alex Rodriguez",
    type: "video",
    content: "https://www.youtube.com/watch?v=YkxrbxoqHDw",
  },
]

export default function LessonViewer() {
  const [selectedLesson, setSelectedLesson] = useState<Lesson>(sampleLessons[0])
  const [activeTab, setActiveTab] = useState("content")
  const [ReactPlayer, setReactPlayer] = useState<any>(null)

  

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return "▶️"
      case "pdf":
        return "📄"
      case "link":
        return "🔗"
      default:
        return "📋"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "video":
        return "bg-blue-100 text-blue-800"
      case "pdf":
        return "bg-green-100 text-green-800"
      case "link":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const renderContent = () => {
    switch (selectedLesson.type) {
      case "video":
        return (
          <div className="aspect-video w-full rounded-lg overflow-hidden bg-black">
            {ReactPlayer ? (
              <ReactPlayer
                url={selectedLesson.content}
                width="100%"
                height="100%"
                controls
                playing={false}
                config={{
                  youtube: {
                    playerVars: { showinfo: 1 },
                  },
                }}
              />
            ) : (
              <div className="flex items-center justify-center h-full text-white">Loading video player...</div>
            )}
          </div>
        )
      case "pdf":
        return (
          <div className="w-full h-[600px] rounded-lg border bg-gray-50">
            <iframe src={selectedLesson.content} className="w-full h-full rounded-lg" title={selectedLesson.title} />
          </div>
        )
      case "link":
        return (
          <div className="w-full h-[600px] rounded-lg border bg-gray-50">
            <iframe src={selectedLesson.content} className="w-full h-full rounded-lg" title={selectedLesson.title} />
          </div>
        )
      default:
        return (
          <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
            <p className="text-gray-600">Content type not supported</p>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-gray-900">Lesson Viewer</h1>
          <p className="text-gray-600">Interactive learning platform supporting videos, PDFs, and external links</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Lesson List Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold text-gray-900">Lessons</h2>
              </div>
              <div className="p-0">
                <div className="space-y-2">
                  {sampleLessons.map((lesson) => (
                    <button
                      key={lesson.id}
                      onClick={() => setSelectedLesson(lesson)}
                      className={`w-full p-4 text-left hover:bg-gray-50 transition-colors border-l-4 ${
                        selectedLesson.id === lesson.id ? "border-l-blue-500 bg-blue-50" : "border-l-transparent"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1 text-lg">{getTypeIcon(lesson.type)}</div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-sm leading-tight mb-1 text-gray-900">{lesson.title}</h3>
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`text-xs px-2 py-1 rounded-full font-medium ${getTypeColor(lesson.type)}`}>
                              {lesson.type.toUpperCase()}
                            </span>
                          </div>
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span className="flex items-center gap-1">⏱️ {lesson.duration}</span>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-2xl font-bold text-gray-900">{selectedLesson.title}</h2>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(selectedLesson.type)}`}
                      >
                        {selectedLesson.type.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{selectedLesson.description}</p>
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <span className="flex items-center gap-2">👤 {selectedLesson.instructor}</span>
                      <span className="flex items-center gap-2">⏱️ {selectedLesson.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <div className="flex border-b">
                    <button
                      onClick={() => setActiveTab("content")}
                      className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
                        activeTab === "content"
                          ? "border-blue-500 text-blue-600"
                          : "border-transparent text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      Content
                    </button>
                    <button
                      onClick={() => setActiveTab("details")}
                      className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
                        activeTab === "details"
                          ? "border-blue-500 text-blue-600"
                          : "border-transparent text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      Details
                    </button>
                  </div>
                </div>

                {activeTab === "content" && <div className="mt-6">{renderContent()}</div>}

                {activeTab === "details" && (
                  <div className="mt-6 space-y-6">
                    <div>
                      <h3 className="font-semibold mb-2 text-gray-900">About this lesson</h3>
                      <p className="text-gray-600 leading-relaxed">{selectedLesson.description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium text-gray-900">Instructor</h4>
                        <p className="text-gray-600">{selectedLesson.instructor}</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium text-gray-900">Duration</h4>
                        <p className="text-gray-600">{selectedLesson.duration}</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium text-gray-900">Content Type</h4>
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(selectedLesson.type)}`}
                        >
                          {selectedLesson.type.toUpperCase()}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium text-gray-900">Source</h4>
                        <button
                          onClick={() => window.open(selectedLesson.content, "_blank")}
                          className="inline-flex items-center gap-2 px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                        >
                          🔗 Open Original
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
