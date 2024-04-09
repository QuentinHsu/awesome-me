---
title: Basic Commands
layout: "doc"
createTime: "2021-07-09"
---

## 开始一个工作区（参见：git help tutorial）

### `clone`：克隆仓库到一个新目录

- 默认

  ```shell
  git clone <remote-url>
  ```

- 重命名本地仓库文件夹名

  ```shell
  git clone <remote-url> <new-local-folder-name>
  ```

- 克隆指定分支

  ```shell
  git clone -b <branch-name> <remote-url>
  ```

### `init`：创建一个空的 Git 仓库或重新初始化一个已存在的仓库

该命令不需要 Git Config 中的 `user.name` 、 `user.email` 。

## 在当前变更上工作（参见：git help everyday）

### `add`：添加文件内容至索引

### `mv`：移动或重命名一个文件、目录或符号链接

**Git 对文件名大小写不敏感。**

如需修改文件名（包含文件类型后缀），需要这样做：

```shell
git mv <old-file-name> <new-file-name>
```

### `restore`：恢复工作区文件

### `rm`：从工作区和索引中删除文件

### `sparse-checkout`：初始化及修改稀疏检出

## 检查历史和状态（参见：git help revisions）

### `bisect`：通过二分查找定位引入 bug 的提交

### `diff`：显示提交之间、提交和工作区之间等的差异

### `grep`：输出和模式匹配的行

### `log`：显示提交日志

### `show`：显示各种类型的对象

### `status`：显示工作区状态

## 扩展、标记和调校您的历史记录

### `branch`：列出、创建或删除分支

#### `-d` / `-D`

删除远程分支：

```shell
git push -d origin remote-branch-name
```

#### 删除在远程已被删除的本地/远程分支记录

- 删除“无用”的本地分支

  ```shell
  git branch -D branch-name
  ```

  目前只能一次删除一个“无用”分支，无法一次性删除所有“无用”分支。

- 删除“无用”的远程分支

  这里所谓“‘无用’的远程分支”，是指在远程已经删除了的分支，在本地哪怕是 git pull 后，本地依旧还是显示存在该远程分支的记录。

  - 一次性删除本地所有无用的远程分支记录

    ```shell
    git remote prune origin
    ```

    在这之前其实建议先查看远程和本地的分支对应情况

    - 有对应关系的，则为 `*tracked`\*
    - 无对应远程关系的，则为 _`stale`_

    ```shell
    git remote show origin
    ```

    在执行了 `git branch -D branch-name`，会得到以下执行结果

- 批量删除关键字分支

  ```shell
  // 删除带有 dev 字样的分支
  git branch | grep 'dev*' | xargs git branch -d
  ```

#### `-m`：修改分支名

- command

  ```shell
  git branch -m <old-branch-name> <new-branch-name>
  ```

### `commit`：记录变更到仓库

#### `--amend`

修改 commit message，或者并且要追加改动内容

- command

  ```shell
  git commit --amend
  ```

#### `--no-edit`

仅仅追加改动内容

- command

  ```shell
  git commit --amend --no-edit
  ```

### `merge`：合并两个或更多开发历史

### `cherry-pick`：应用一些现有的提交所引入的修改（分支之间）

- 默认。若无冲突，直接合并。提交时间为引用提交的提交时间，但 commit id 与引用提交的 commit id 不一致。

  ```shell
  git cherry-pick <commit-id>
  ```

- `<commit-id>`：仅需要前 7 位即可
- 更多参考

  [git cherry-pick 教程](https://www.ruanyifeng.com/blog/2020/04/git-cherry-pick.html)

### `rebase`：在另一个分支上重新应用提交

**谨慎使用**

### `reset`：重置当前 HEAD 到指定状态

回滚**到**某个提交，1～n。这会将提交记录，和代码改动一起回滚

```shell
git reset HEAD~n
```

#### `—-soft`

仅仅撤销提交记录，代码改动不撤销（常用）

```shell
git reset --soft HEAD~n
```

### `switch`：切换分支

`checkout` “分支管理“功能的替代者，在 Git v2.23 中引入

- 切换已有分支

  ```shell
  git switch branch-name
  ```

#### `-c`

创建并切换到新分支

```shell
git switch -c branch-name
```

#### `--orphan`

创建并切换到一个不包含任何内容的分支，无文件，无提交：

```shell
git switch --orphan <new-branch-name>
```

但当前所在分支必须要提交完所有已改动文件，不然无法创建。

假如想创建一个文件存在但不包含提交信息的新分支，则使用 `checkout` 的 `--orphan` 参数：`git checkout --orphan <new-branch-name>` 。

### `tag`：创建、列出、删除或校验一个 GPG 签名的标签对象

- 列出

  - 所有

  ```shell
  # 列出 - 所有的
  git tag
  ```

  - 检索

## 协同（参见：git help workflows）

### `fetch`：从另外一个仓库下载对象和引用

### `pull`：获取并整合另外的仓库或一个本地分支

- 可能需要注意的是

  在 Git v2.27.0 及以上，在未对 Git 的 Pull 系列命令进行配置时，执行 `git pull` 会得到以下警告

  ```shell
  hint: Pulling without specifying how to reconcile divergent branches is
  hint: discouraged. You can squelch this message by running one of the following
  hint: commands sometime before your next pull:
  hint:
  hint:   git config pull.rebase false  # merge (the default strategy)
  hint:   git config pull.rebase true   # rebase
  hint:   git config pull.ff only       # fast-forward only
  hint:
  hint: You can replace "git config" with "git config --global" to set a default
  hint: preference for all repositories. You can also pass --rebase, --no-rebase,
  hint: or --ff-only on the command line to override the configured default per
  hint: invocation.
  ```

  可做以下配置以去除警告

  - 建议配置成

    ```shell
    git config --global pull.rebase false
    ```

  - 如果设置成这样，当远程分支跟你本地分支出现分歧时，会无法快速解决进而无法合并

    ```shell
    git config --global pull.ff only
    ```

    https://www.coder.work/article/185222

`git pull`，是“先执行 `git fetch` 然后在执行 `git merge FETCH_HEAD` ”的操作简写。

### `push`：更新远程引用和相关的对象

#### `--force`

使用本地分支的提交覆盖远程仓库分支的提交。有安全隐患，会覆盖掉其他人在该分支的新提交。

```shell
git push --force
```

#### `--force-with-lease`

使用该参数，如果远程仓库有其他人推送了新的提交，那么你本次的覆盖推送将被拒绝。

```shell
git push --force-with-lease
```

#### `--mirror` ：**禁止使用**

```shell
git push --mirror
```

## Git Tag

新建的 tag 记录并不会跟随 `git push` / `git push origin branch-name` 一起推送，需要在 `git push` 时显式地指定 tag name 以推送 tag 记录：

```shell
git push origin tag-name
```

## Tool

[Fork - a fast and friendly git client for Mac and Windows](https://git-fork.com/)
