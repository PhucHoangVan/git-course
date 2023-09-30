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

/** - GIT REBASE
 * 
 */

/** - GIT RESTORE           
 * - git restore
 * - git restore --staged (đã sử dụng khi loại bỏ conflig chưa được merge)
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
 * - git stash list | grep <branch-name>: hiển thị các stash được tạo từ "branch-name"
 * + Khi dùng git stash để lưu tạm các thay đổi, thì khi apply lại 1 phiên bản stash -> thì tất cả thay đổi được phục hồi lại sẽ được đưa về vùng untracked
 * + Ngoài ra, còn lệnh git stash save -u (theo lý thuyết: mục đích là để save các file bao gồm "tracked" và "untracked" vào stash, nếu không có "-u" thì chỉ những file "tracked" hay "đã được git add" mới được save vào stash. Tuy nhiên theo thử nghiệm thì không dùng "-u" thì cả "untracked" và "tracked" đều được save và khi phục hồi sẽ phục hồi lại trong vùng "untracked")
 * Q/A:
 * - lệnh git stash list sẽ hiển thị tất cả các stash trên toàn bộ repo hay trên branch hiện tại?
 * -> Nếu không chỉ định branch thì sẽ lấy stash trên toàn bộ repo
 * - lệnh git apply có thể apply 1 stash được tạo từ brach khác cho branch hiện tại hay không?
 * -> Có thể, hoàn toàn apply mọi stash được lưu cho mọi branch khác
 */


/** GIT LOG
 * - after run script git log, we can navigate with keyboard to find commit in git log:
 *  - example keyboard: return, w, spacebar, q, ?pattern, /pattern, n, N
 * - git log --oneline <branch-name>..HEAD: (compare commit) - Xem các commit exists trên branch hiện tại nhưng chưa có trên <branch-name>. 
 * -> Lưu ý là: branch có thêm tiền tố "origin/" là các branch trên remote repository 
 * - git log --oneline origin/<remote-branch-name>..HEAD: (thường sử dụng trong trường hợp xem các commit chưa được push) 
 * 
 * - git log --stat: xem lịch sử commit cùng số dòng insert/delete
 */

/** GIT DIFF
 * - git diff:
 * - git diff --staged
 * - git diff: Xem các thay đổi giữa untracked và trong index staged(tracked)
 * - git diff --staged: Xem các thay đổi giữa tracked và root commit (phiên bản last commit trước đó)
 */  


/** 3 - GIT CHERRY-PICK
 * 
 * 
 */


/** GIT DIFF
 * - git diff: Xem các thay đổi giữa untracked và trong index staged(tracked) 
 * - git diff --staged: Xem các thay đổi giữa tracked và root commit (phiên bản last commit trước đó)
 */

// check view commit has not been push to remote
// check view commit has not been push to remote
// check view commit has not been push to remote