
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calendar, FileSearch, Newspaper } from "lucide-react";

const DashboardOverview = () => {
  // Sample data for the dashboard
  const modules = [
    {
      title: "Smart Study Planner",
      description: "Create personalized study plans with daily and weekly targets",
      icon: Calendar,
      color: "bg-blue-100 text-blue-700",
      route: "/planner"
    },
    {
      title: "Daily GS News Summarizer",
      description: "Auto-categorized news for GS Papers I-IV with quizzes",
      icon: Newspaper,
      color: "bg-purple-100 text-purple-700",
      route: "/news"
    },
    {
      title: "PYQ Analyzer",
      description: "Filter and analyze previous year questions with AI-generated answers",
      icon: FileSearch,
      color: "bg-amber-100 text-amber-700",
      route: "/questions"
    },
    {
      title: "Essay Builder & Feedback",
      description: "Write essays with AI frameworks and receive detailed feedback",
      icon: BookOpen,
      color: "bg-emerald-100 text-emerald-700",
      route: "/essay"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Welcome to PrepSutra</h2>
        <p className="text-muted-foreground mt-2">
          Your AI-driven platform for holistic UPSC preparation
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {modules.map((module, index) => (
          <a href={module.route} key={index} className="block">
            <Card className="h-full transition-all hover:shadow-md hover:border-prepsutra-primary/50">
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-lg font-medium">{module.title}</CardTitle>
                <div className={`p-2 rounded-full ${module.color}`}>
                  <module.icon className="h-4 w-4" />
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">{module.description}</CardDescription>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Study Progress</CardTitle>
            <CardDescription>Your weekly study progress across topics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center bg-muted/30 rounded-md">
              <p className="text-muted-foreground">Progress charts will appear here</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
            <CardDescription>Tasks scheduled for today and tomorrow</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Read Indian Polity Chapter 5</p>
                  <p className="text-sm text-muted-foreground">Today, 2:00 PM</p>
                </div>
                <span className="bg-blue-100 text-blue-700 text-xs py-1 px-2 rounded-full">
                  Pending
                </span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Complete Economics Quiz</p>
                  <p className="text-sm text-muted-foreground">Tomorrow, 10:00 AM</p>
                </div>
                <span className="bg-amber-100 text-amber-700 text-xs py-1 px-2 rounded-full">
                  Upcoming
                </span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Review Current Affairs Notes</p>
                  <p className="text-sm text-muted-foreground">Tomorrow, 4:00 PM</p>
                </div>
                <span className="bg-amber-100 text-amber-700 text-xs py-1 px-2 rounded-full">
                  Upcoming
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardOverview;
