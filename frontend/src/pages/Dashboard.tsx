import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { KnowledgeChat } from "@/components/KnowledgeChat";
import { ReportGenerator } from "@/components/ReportGenerator";
import { ManagementDashboard } from "@/components/ManagementDashboard";
import { MessageSquare, FileCheck, Settings } from "lucide-react";

const Dashboard = () => {

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Hệ thống quản lý tài liệu thông minh
          </h1>
          <p className="text-muted-foreground">
            Quản lý tài liệu và hỏi đáp với AI về kiến thức công ty
          </p>
        </div>

        <Tabs defaultValue="management" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="management" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Quản Lý Hệ Thống
            </TabsTrigger>
            <TabsTrigger value="reports" className="flex items-center gap-2">
              <FileCheck className="h-4 w-4" />
              Tạo Báo Cáo
            </TabsTrigger>
            <TabsTrigger value="chat" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Hỏi Đáp AI
            </TabsTrigger>
          </TabsList>

          <TabsContent value="management">
            <ManagementDashboard />
          </TabsContent>

          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>Tạo Báo Cáo Tự Động</CardTitle>
                <CardDescription>
                  Tự động tạo Bảng Tuyên Bố Đáp Ứng Kỹ Thuật
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ReportGenerator />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="chat">
            <Card>
              <CardHeader>
                <CardTitle>Hỏi Đáp Với AI</CardTitle>
                <CardDescription>
                  Đặt câu hỏi và nhận câu trả lời từ tài liệu đã tải lên
                </CardDescription>
              </CardHeader>
              <CardContent>
                <KnowledgeChat />
              </CardContent>
            </Card>
          </TabsContent>

        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;