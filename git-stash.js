/**  
 * @_GIT_STASH
 * 
 * @Description
 * !Git stash is used for case clean working tree and backup changed 
 * todo: Follow some feature of git stash below:
 * 
 * - git stash save "<name of stash>": create a stash changed
 * - stash list: view all stash in current branch
 * - git stash list -p: view all content of change in stash store
 * - git stash show stash@{1}: view detail change in stash has stash_id = 1       
 * - git stash apply stash@{1}: apply changed in stash has stash_id = 1
 * - git stash drop stash@{1}: delete stash has stash_id = 1
 * - git stash pop stash@{1}: apply changed in stash has stash_id = 1 and drop this stash
 * - git stash clear: delete all stash saved in repo 

 * - git stash list | grep <branch-name>: hiển thị các stash được tạo từ "branch-name"
 * + Khi dùng git stash để lưu tạm các thay đổi, thì khi apply lại 1 phiên bản stash -> thì tất cả thay đổi được phục hồi lại sẽ được đưa về vùng untracked
 * + Ngoài ra, còn lệnh git stash save -u (theo lý thuyết: mục đích là để save các file bao gồm "tracked" và "untracked" vào stash, nếu không có "-u" thì chỉ những file "tracked" hay "đã được git add" mới được save vào stash. Tuy nhiên theo thử nghiệm thì không dùng "-u" thì cả "untracked" và "tracked" đều được save và khi phục hồi sẽ phục hồi lại trong vùng "untracked")
 * + -> giải thích: "-u" ở đây có nghĩa là untracked-file(có tác dụng trong trường hợp các file không điợc theo dõi bởi git, thường là các file bị loại bỏ bởi .git-ignore)
 
*? Q/A:
 * - lệnh git stash list sẽ hiển thị tất cả các stash trên toàn bộ repo hay trên branch hiện tại?
 * -> Nếu không chỉ định branch thì sẽ lấy stash trên toàn bộ repo
 * - lệnh git apply có thể apply 1 stash được tạo từ brach khác cho branch hiện tại hay không?
 * -> Có thể, hoàn toàn apply mọi stash được lưu cho mọi branch khác
 */