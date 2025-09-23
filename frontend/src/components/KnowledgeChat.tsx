import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Clock, Wrench } from "lucide-react";

export const KnowledgeChat = () => {
  return (
    <div className="flex items-center justify-center min-h-[500px]">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-muted flex items-center justify-center">
            <MessageSquare className="h-8 w-8 text-muted-foreground" />
          </div>
          <CardTitle className="text-xl">Hỏi Đáp AI</CardTitle>
          <CardDescription>
            Tính năng trò chuyện với AI về tài liệu
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Wrench className="h-5 w-5" />
            <span className="font-medium">Đang phát triển</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Tính năng này sẽ được cập nhật trong phiên bản tiếp theo
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground bg-muted/50 rounded-lg p-3">
            <Clock className="h-4 w-4" />
            <span>Sắp ra mắt</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};