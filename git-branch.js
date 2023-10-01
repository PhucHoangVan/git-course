/**
 * @_GIT_BRANCH
 * 
 * @Description
 * !Git branch is used for manage branch in your repository
 * 
 * - git branch: View all branch available in local
 * - git branch <branch-name>: Create new branch
 * - git checkout -b <branch-name>: Create and checkout to <new-branch>
 * - git branch -d <branch-name>: Delete a branch in local
 * - git push origin --delete <branch-name>: Delete a branch in remote repository   
 * - git checkout <branch-name>: Switch to another branch
 * - git push --set-upstream origin <new-branch-name>: public a branch in local to remote repository
 * - git push -f origin <branch-name>: force push, [DANGEROUS], (thường dùng cho trường hợp muốn override lại các commit đã có trên remote repository)
 * - git push --force-with-lease <remote-name> <branch-name>: the same push-force, but before push-force -> kiểm tra(1.code trên branch-remote chưa được ai khác update trước đó && 2.remote branch đã tồn tại)
 * 
 * 
 * todo: Thay đổi thông tin tài khoản git như sau:
 * 
 * ? note:
 * - Không thể xóa 1 branch khi đang ở trên chính nó (chuyển sang branch khác trước khi thực hiện delete branch)
 * 
 * - Đối với các branch mới được tạo/ có chứa các commit chưa được merge/rebase với các branch khác thì không thể xóa(vì git đảm bảo tránh mất code chưa được merge)
 * -> Nếu muốn xóa branch trong case này thì thay option "-d" = "-D".
 */