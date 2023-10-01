/**This file to test commit with git*/

/** 1 - DISCARD CHANGE
 * - git stash: save changed to stash and reset workspace
 * - git reset: touch to changed on stage (tracked file)
 * - git clean: remove every untracked file 
 */

/** GIT DIFF
 * - git diff: Xem các thay đổi giữa working-tree và trong index staged(tracked)
 * -> các file phải được add vào git thì khi modified mới được git diff compare (trường hợp file vừa được tạo<untracked-file> or file in git.ignore sẽ không được git diff compare)
 * - git diff --staged: Xem các thay đổi giữa tracked và root commit (phiên bản last commit trước đó)
 */

/** - GIT RESTORE           
 * - git restore
 * - git restore --staged (đã sử dụng khi loại bỏ conflig chưa được merge)
 */

/** - GIT REBASE
 */

/** - GIT REVERT
 */

/** - GIT AMEND COMMIT
 */

/** - GIT SQUASH
 */

/** - GIT CHERRY-PICK
 */

/** - GIT PULL & FETCH 
 */

/** - GIT MERGE 
 */

/** - ANOTHER
 * - git branch --contains <commit-hash>: Xem tất cả các branch có chứa commit(có theo thứ tự thời gian branch được tạo)
 * - History ?
 * - Reflog
 */