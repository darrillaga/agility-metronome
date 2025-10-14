---
description: Create a git worktree to work apart from other claude instances
---

Create a git worktree in a fresh directory in /workspaces with a timestamp suffix (e.g., agility-metronome-20251014-031907). Work in a new branch, and when complete, push to main with rebase if needed, then cleanup.

Git worktrees allow multiple working directories from the same repository, sharing the same .git directory but with different branches checked out. This is more efficient than cloning.

Steps:
1. From the current repository, generate a timestamp-based directory name (format: agility-metronome-YYYYMMDD-HHMMSS)
2. Create a descriptive branch name (e.g., feature/issue-X or fix/description)
3. Create a git worktree: `git worktree add /workspaces/[timestamp-dir] -b [branch-name]`
4. Navigate to the new worktree directory
5. Report the new directory path and branch name to the user
6. [User works on the task]
7. When work is complete and user is ready to merge:
   - Commit all changes in the worktree
   - Switch back to main branch: `cd /workspaces/agility-metronome && git checkout main`
   - Fetch latest changes: `git fetch origin`
   - Pull main: `git pull origin main`
   - Switch to worktree: `cd /workspaces/[timestamp-dir]`
   - Rebase on main: `git rebase main`
   - Resolve any conflicts if needed
   - Push the branch to origin: `git push origin [branch-name]`
   - Switch back to main and merge: `cd /workspaces/agility-metronome && git checkout main && git merge [branch-name]`
   - Push main: `git push origin main`
8. After successful merge, remove the worktree: `git worktree remove /workspaces/[timestamp-dir]`
9. Delete the remote branch if desired: `git push origin --delete [branch-name]`
