
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const News = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 lg:p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Daily GS News Summarizer</h2>
              <p className="text-muted-foreground mt-2">
                Auto-categorized news for GS Papers I-IV with weekly summaries and quizzes
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Today's News Digest</CardTitle>
                <CardDescription>
                  {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="gs1">
                  <TabsList className="mb-4">
                    <TabsTrigger value="gs1">GS Paper I</TabsTrigger>
                    <TabsTrigger value="gs2">GS Paper II</TabsTrigger>
                    <TabsTrigger value="gs3">GS Paper III</TabsTrigger>
                    <TabsTrigger value="gs4">GS Paper IV</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="gs1" className="space-y-4">
                    <div className="rounded-md border p-4">
                      <h3 className="font-medium text-lg">Archaeological Survey Uncovers Ancient Settlement in Rajasthan</h3>
                      <div className="flex items-center gap-2 my-2">
                        <span className="bg-blue-100 text-blue-700 text-xs py-1 px-2 rounded-full">
                          History
                        </span>
                        <span className="bg-blue-100 text-blue-700 text-xs py-1 px-2 rounded-full">
                          Culture
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        The Archaeological Survey of India has discovered a 2,500-year-old settlement in western Rajasthan. The site contains artifacts indicating trade with Mesopotamian civilizations.
                      </p>
                      <Button variant="outline" size="sm">Read Full Summary</Button>
                    </div>
                    
                    <div className="rounded-md border p-4">
                      <h3 className="font-medium text-lg">New Climate Pattern Observed in Indian Ocean</h3>
                      <div className="flex items-center gap-2 my-2">
                        <span className="bg-blue-100 text-blue-700 text-xs py-1 px-2 rounded-full">
                          Geography
                        </span>
                        <span className="bg-blue-100 text-blue-700 text-xs py-1 px-2 rounded-full">
                          Environment
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Scientists have identified a new climate pattern in the Indian Ocean that may affect monsoon predictions. The pattern shows increased warming in the western Indian Ocean.
                      </p>
                      <Button variant="outline" size="sm">Read Full Summary</Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="gs2">
                    <p className="text-muted-foreground">GS Paper II news summaries will appear here.</p>
                  </TabsContent>
                  
                  <TabsContent value="gs3">
                    <p className="text-muted-foreground">GS Paper III news summaries will appear here.</p>
                  </TabsContent>
                  
                  <TabsContent value="gs4">
                    <p className="text-muted-foreground">GS Paper IV news summaries will appear here.</p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Weekly Compilations</CardTitle>
                  <CardDescription>Download weekly PDF summaries by category</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-3 border rounded-md">
                    <div>
                      <p className="font-medium">Week of May 1 - May 7, 2025</p>
                      <p className="text-sm text-muted-foreground">GS Paper I Compilation</p>
                    </div>
                    <Button variant="outline" size="sm">Download PDF</Button>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-md">
                    <div>
                      <p className="font-medium">Week of May 1 - May 7, 2025</p>
                      <p className="text-sm text-muted-foreground">GS Paper II Compilation</p>
                    </div>
                    <Button variant="outline" size="sm">Download PDF</Button>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-md">
                    <div>
                      <p className="font-medium">Week of May 1 - May 7, 2025</p>
                      <p className="text-sm text-muted-foreground">GS Paper III Compilation</p>
                    </div>
                    <Button variant="outline" size="sm">Download PDF</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>News Quizzes</CardTitle>
                  <CardDescription>Test your knowledge with auto-generated quizzes</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-3 border rounded-md">
                    <div>
                      <p className="font-medium">Daily Current Affairs Quiz</p>
                      <p className="text-sm text-muted-foreground">15 questions · 15 minutes</p>
                    </div>
                    <Button size="sm">Start Quiz</Button>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-md">
                    <div>
                      <p className="font-medium">Weekly Revision Quiz</p>
                      <p className="text-sm text-muted-foreground">30 questions · 30 minutes</p>
                    </div>
                    <Button size="sm">Start Quiz</Button>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-md">
                    <div>
                      <p className="font-medium">Monthly Comprehensive Quiz</p>
                      <p className="text-sm text-muted-foreground">50 questions · 60 minutes</p>
                    </div>
                    <Button size="sm">Start Quiz</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default News;
