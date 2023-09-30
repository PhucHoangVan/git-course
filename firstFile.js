/**This file to test commit with git*/

/** 1 - DISCARD CHANGE
 * - git stash: save changed to stash and reset workspace
 * - git reset: touch to changed on stage (tracked file)
 * - git clean: remove every untracked file
 * 
 * 
 * 
 */

/** - GIT RESET
 * 
 */


/** - GIT AMEND COMMIT
 * 
 */


/** 2 - GIT STASH
 * - git stash save "<name of stash>": create a stash changed
 * - git stash list: view all stash in current branch
 * - git stash list -p: view all content of change in stash store
 * - git stash show stash@{1}: view detail change in stash has stash_id = 1       
 * - git stash apply stash@{1}: apply changed in stash has stash_id = 1
 * - git stash drop stash@{1}: delete stash has stash_id = 1
 * - git stash pop stash@{1}: apply changed in stash has stash_id = 1 and drop this stash
 * - git stash clear: delete all stash saved in repo
 * 
 * Q/A:
 * - lệnh git stash list sẽ hiển thị tất cả các stash trên toàn bộ repo hay trên branch hiện tại?
 * - lệnh git apply có thể apply 1 stash được tạo từ brach khác cho branch hiện tại hay không?
 */


/** GIT LOG
 * - after run script git log, we can navigate with keyboard to find commit in git log:
 *  - example keyboard: return, w, spacebar, q, ?pattern, /pattern, n, N
 * 
 */


/** 3 - GIT CHERRY-PICK
 * 
 * 
 */

// check view commit has not been push to remote