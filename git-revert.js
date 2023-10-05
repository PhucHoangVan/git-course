/**  
 * @_GIT_STASH
 * 
 * @Description
 * !Git revert is used for case you want 
 * todo: Follow some feature of git revert below:
 * - git revert <commit-hash>: tạo 1 commit mới với code change trờ lại trạng thái trước commit destination
 * -> Nếu không có confix, mặc định 1 editor bật lên cho phép sửa đổi thông tin của commit được revert tạo ra
 * -> Nếu có conflix, thực hiện resolve conflix rồi commit lại hoặc [git revert --continue]
 * 
 * - git revert --abort: loại bỏ revert đang được thực hiện
 * - git revert HEAD: thường dùng để roolback lại commit ngay trước đó, nhưng không muốn xóa đi commit được roolback (tức là vẫn giữ lịch sử các commit hiển thị)
 * 
 * 
 * todo: compare git "reset" & "revert"
 * - git revert (compare change tại current commit vs commit đứng liền trước commit đang destinate <tức là không so sánh với change trong commit destinate, và bỏ qua những change giữa 2 commit. mà chỉ so sánh với các change trước khi commit destinate được commit>)
 * - git reset (compare diff ở giữa 2 commit)
 * -> a - b - c - d
 * => reset từ d->a
 * => diff = b,c
 */
