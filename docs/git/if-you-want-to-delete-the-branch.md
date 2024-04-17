---
title: 如果你想删除分支
layout: "doc"
createTime: "2022-04-07"
next: false
---

<script setup>
import ComponentCommandConsole from '../.vitepress/theme/components/command-console.vue'
</script>

## 你先在远程删除了远程分支……

并想删除本地的对应分支，以及删除本地仓库中对应的远程引用信息。

1. 删除本地的对应分支

   ```shell
   git branch -d branch_name
   ```

   这条命令将会删除本地的分支。

   > [!TIP]
   > 如果分支尚未合并，你可以使用 `-D` 选项强制删除。
   >
   > ```shell
   > git branch -D branch_name
   > ```

2. 更新本地仓库的远程跟踪分支，并删除本地已经不存在的远程分支的引用。

   ```bash
   git fetch --prune origin

   ```

完成

## 当你想全都在本地操作……

1.  首先，确保你当前在本地仓库中。可以通过 `cd` 命令进入到你的本地仓库目录。

2.  确认你当前所在的分支。可以通过 `git branch` 命令查看当前分支，并确保你不是在要删除的分支上。

    ```shell
    git branch
    ```

    <ComponentCommandConsole>
    ❯ git branch
    <template #console>
      * main <br>
      </template>
    </ComponentCommandConsole>

3.  切换到你想要删除的分支所在的分支之外。如果你当前在要删除的分支上，可以通过 `git switch` 或者 `git checkout` 命令切换到其他分支。

    ::: code-group

    ```shell [git switch]
    git switch target_branch_name
    ```

    ```shell [git branch]
    git branch target_branch_name
    ```

    :::

4.  删除本地分支。使用 `git branch -d <branch-name>` 命令来删除本地分支。例如，如果要删除名为 `feature-branch`的分支，可以使用命令 `git branch -d feature-branch`。

    ```shell
    git branch -d target_branch_name
    ```

    > [!TIP] 如果该命令执行失败
    > 那么意味着该分支上是其改动未合并到其他分支的分支，那么你需要将 `-d` 替换成 `-D` 来强制删除
    >
    > ```shell
    >   git branch -D target_branch_name
    > ```

5.  推送删除操作到远程仓库。使用 `git push origin --delete <branch-name>` 命令来删除远程仓库中的分支。例如，如果要删除名为 `feature-branch` 的远程分支，可以使用命令 `git push origin --delete feature-branch`。

    ```shell
    git push origin --delete feature-branch
    ```

6.  确认删除操作。可以通过 `git branch -a` 或者在远程仓库的网页界面上确认删除操作是否成功。
    <ComponentCommandConsole>
    ❯ git branch -a
    <template #console>

    \* main <br>
    remotes/origin/HEAD -> origin/main <br>
    remotes/origin/main<br>
    </template>
    </ComponentCommandConsole>
