"use client";
import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";

import Header from "./component/Header";
import SideBar from "./component/Sidebar";

type Task = {
  id: number;
  title: string;
  status: "todo" | "in-progress" | "done";
};

const tasks: Task[] = [
  { id: 1, title: "牛乳買う", status: "todo" },
  { id: 2, title: "洗濯物たたむ", status: "in-progress" },
  { id: 3, title: "レポート仕上げる", status: "done" },
  { id: 4, title: "ジムに行く", status: "todo" },
];

export default function Home() {
  const todoTasks = tasks.filter((task) => task.status === "todo");
  const inProgressTasks = tasks.filter((task) => task.status === "in-progress");
  const doneTasks = tasks.filter((task) => task.status === "done");

  const renderTasks = (taskList: Task[]) => {
    return taskList.map((task) => (
      <Paper key={task.id} sx={{ p: 2, mb: 1 }}>
        <Typography>{task.title}</Typography>
      </Paper>
    ));
  };

  return (
    // 全体を縦方向に並べたい → flexDirection: column
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* 上部ヘッダー */}
      <Header />

      {/* 下の領域を「サイドバー」と「メインコンテンツ」に分割 */}
      <Box sx={{ display: "flex", flex: 1 }}>
        {/* 左サイドバー */}
        {/* 幅はお好みで。固定幅にするなら width: 240 とか */}
        <Box sx={{ width: 240, borderRight: "1px solid #ccc" }}>
          <SideBar />
        </Box>

        {/* メインコンテンツ */}
        <Box sx={{ flex: 1, p: 2 }}>
          {/* ここにカンバンのタスク表示 */}
          <Typography variant="h4" gutterBottom>
            タスク一覧
          </Typography>
          <Grid container spacing={2}>
            {/* To Do カラム */}
            <Grid item xs={4}>
              <Typography variant="h6" gutterBottom>
                To Do
              </Typography>
              {renderTasks(todoTasks)}
            </Grid>

            {/* In Progress カラム */}
            <Grid item xs={4}>
              <Typography variant="h6" gutterBottom>
                In Progress
              </Typography>
              {renderTasks(inProgressTasks)}
            </Grid>

            {/* Done カラム */}
            <Grid item xs={4}>
              <Typography variant="h6" gutterBottom>
                Done
              </Typography>
              {renderTasks(doneTasks)}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
