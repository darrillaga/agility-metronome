---
description: Clone a fresh version of the repo from main to work apart from other claude instances
---

Clone the agility-metronome repository into a fresh directory in /workspaces with a timestamp suffix (e.g., agility-metronome-20251014-031907). Work in a new branch, and when complete, push to main with rebase if needed, then cleanup.

Steps:
1. Generate a timestamp-based directory name (format: agility-metronome-YYYYMMDD-HHMMSS)
2. Clone from https://github.com/darrillaga/agility-metronome.git into the new directory
3. Navigate to the new directory
4. Create a new branch with descriptive name (e.g., feature/issue-X or fix/description)
5. Report the new directory path and branch name to the user
6. [User works on the task]
7. When work is complete and user is ready to merge:
   - Fetch latest changes from origin/main
   - Rebase the branch on main if there are any conflicts
   - Resolve any conflicts if needed
   - Push the branch to origin
   - Merge to main (or create PR if preferred)
8. After successful merge, delete the temporary directory to clean up workspace
