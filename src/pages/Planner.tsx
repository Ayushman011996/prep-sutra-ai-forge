
import { useState } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";

const Planner = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 lg:p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Smart Study Planner</h2>
              <p className="text-muted-foreground mt-2">
                Generate personalized study plans and manage your daily targets
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-12">
              <Card className="md:col-span-4">
                <CardHeader>
                  <CardTitle>Calendar</CardTitle>
                  <CardDescription>Select a date to view or plan tasks</CardDescription>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border shadow-sm pointer-events-auto"
                  />
                </CardContent>
              </Card>

              <div className="md:col-span-8 space-y-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Daily Schedule</CardTitle>
                      <CardDescription>
                        {date ? date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : 'No date selected'}
                      </CardDescription>
                    </div>
                    <Button>Add Task</Button>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="all">
                      <TabsList className="mb-4">
                        <TabsTrigger value="all">All Tasks</TabsTrigger>
                        <TabsTrigger value="pending">Pending</TabsTrigger>
                        <TabsTrigger value="completed">Completed</TabsTrigger>
                      </TabsList>
                      <TabsContent value="all" className="space-y-4">
                        <div className="rounded-md border p-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-medium">Indian Economy - Chapter 3</h3>
                              <p className="text-sm text-muted-foreground">
                                Read and make notes on Monetary Policy
                              </p>
                              <div className="mt-2 flex items-center gap-2">
                                <span className="bg-blue-100 text-blue-700 text-xs py-1 px-2 rounded-full">
                                  2 hours
                                </span>
                                <span className="bg-amber-100 text-amber-700 text-xs py-1 px-2 rounded-full">
                                  Medium Priority
                                </span>
                              </div>
                            </div>
                            <div>
                              <Button variant="outline" size="sm">Mark Complete</Button>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-md border p-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-medium">Indian Polity Quiz</h3>
                              <p className="text-sm text-muted-foreground">
                                Complete 30 MCQs on Constitutional Framework
                              </p>
                              <div className="mt-2 flex items-center gap-2">
                                <span className="bg-blue-100 text-blue-700 text-xs py-1 px-2 rounded-full">
                                  1 hour
                                </span>
                                <span className="bg-red-100 text-red-700 text-xs py-1 px-2 rounded-full">
                                  High Priority
                                </span>
                              </div>
                            </div>
                            <div>
                              <Button variant="outline" size="sm">Mark Complete</Button>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-md border p-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-medium">Current Affairs Revision</h3>
                              <p className="text-sm text-muted-foreground">
                                Review last week's current affairs notes
                              </p>
                              <div className="mt-2 flex items-center gap-2">
                                <span className="bg-blue-100 text-blue-700 text-xs py-1 px-2 rounded-full">
                                  45 minutes
                                </span>
                                <span className="bg-green-100 text-green-700 text-xs py-1 px-2 rounded-full">
                                  Low Priority
                                </span>
                              </div>
                            </div>
                            <div>
                              <Button variant="outline" size="sm">Mark Complete</Button>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="pending">
                        <p className="text-muted-foreground">Your pending tasks will appear here.</p>
                      </TabsContent>
                      <TabsContent value="completed">
                        <p className="text-muted-foreground">Your completed tasks will appear here.</p>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Generate Study Plan</CardTitle>
                    <CardDescription>Create a personalized study plan based on your goals</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-1 block">Exam Target Date</label>
                          <input type="date" className="w-full rounded-md border p-2" />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-1 block">Daily Study Hours</label>
                          <select className="w-full rounded-md border p-2">
                            <option>4-6 hours</option>
                            <option>6-8 hours</option>
                            <option>8-10 hours</option>
                            <option>10+ hours</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">Focus Areas</label>
                        <div className="grid grid-cols-2 gap-2">
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" />
                            <span>GS Paper I</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" />
                            <span>GS Paper II</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" />
                            <span>GS Paper III</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" />
                            <span>GS Paper IV</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" />
                            <span>Essay</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" />
                            <span>Optional</span>
                          </label>
                        </div>
                      </div>
                      <Button className="mt-2">Generate Plan</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Planner;
