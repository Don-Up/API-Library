# useImmer

<audio src="C:\Users\10691\Downloads\这段代码主要使用了`useIm.mp3"></audio>

```tsx
import React from "react";
import { Button } from "antd";
import { useImmer } from "use-immer"; // 从 immer 导入 useImmer
import "antd/dist/reset.css";

interface Survey {
    id: number;
    title: string;
    status: "已发布" | "未发布";
}

const SurveyPage: React.FC = () => {
    const [surveys, updateSurveys] = useImmer<Survey[]>([
        { id: 1, title: "问卷1", status: "已发布" },
        { id: 2, title: "问卷2", status: "已发布" },
        { id: 3, title: "问卷3", status: "已发布" },
        { id: 4, title: "问卷4", status: "已发布" },
        { id: 868, title: "问卷868", status: "未发布" },
    ]);

    // 发布问卷
    const handlePublish = (id: number) => {
        updateSurveys((draft) => {
            const survey = draft.find((s) => s.id === id);
            if (survey) {
                survey.status = "已发布";
            }
        });
    };

    // 删除问卷
    const handleDelete = (id: number) => {
        updateSurveys((draft) => {
            const index = draft.findIndex((s) => s.id === id);
            if (index !== -1) {
                draft.splice(index, 1);
            }
        });
    };

    // 新增问卷
    const handleAddSurvey = () => {
        updateSurveys((draft) => {
            const newSurvey: Survey = {
                id: draft.length + Math.floor(Math.random() * 1000), // 随机生成新问卷 ID
                title: `问卷${draft.length + 1}`,
                status: "未发布",
            };
            draft.push(newSurvey);
        });
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
            {/* 页面标题 */}
            <h1 className="text-2xl font-bold mb-6">问卷列表页2</h1>

            {/* 问卷列表 */}
            <div className="space-y-4">
                {surveys.map((survey) => (
                    <div
                        key={survey.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:shadow"
                    >
                        {/* 问卷标题 */}
                        <span className="font-medium text-lg">{survey.title}</span>

                        {/* 问卷状态 */}
                        <span
                            className={`${
                                survey.status === "已发布" ? "text-green-500" : "text-gray-500"
                            }`}
                        >
              {survey.status}
            </span>

                        {/* 操作按钮 */}
                        <div className="space-x-2">
                            <Button
                                type="default"
                                size="small"
                                onClick={() => handlePublish(survey.id)}
                            >
                                发布问卷
                            </Button>
                            <Button
                                type="default"
                                size="small"
                                danger
                                onClick={() => handleDelete(survey.id)}
                            >
                                删除问卷
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            {/* 新增问卷按钮 */}
            <div className="mt-6">
                <Button
                    type="primary"
                    size="large"
                    className="w-full text-white bg-blue-500 hover:bg-blue-600"
                    onClick={handleAddSurvey}
                >
                    新增问卷
                </Button>
            </div>
        </div>
    );
};

export default SurveyPage;
```

