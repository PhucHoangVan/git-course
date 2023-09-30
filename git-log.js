/**
 * @_GIT_LOG
 * 
 * @Description
 * !Git log is used for case view commit in branch and commit in graph 
 * todo: Follow some feature of git log below: 
 * 
 * - git log --oneline: (tham số "--oneline" - hiển thị các commit trên 1 dòng)
 * - git log --stat: (tham số "--stat" - hiển thị các commit cùng số dòng insert/delete)
 * - git log -n <number-of-commit>: hiển thị <n> commit gần nhất
 * - git log --no-merges: hiển thị các commit không phải là <commit-merge>
 * - git shortlog: hiển thị các commit(và số lượng commit) theo <Contributor/Author>
 * 
 * - after run script git log, we can navigate with keyboard to find commit in git log:
 * -> example keyboard: return, w, spacebar, q, ?pattern, /pattern, n, N
 * 
 * - git log --oneline <branch-name>..HEAD: (compare commit) - Xem các commit exists trên branch hiện tại (cho đến vị trí HEAD đang đứng) nhưng chưa có trên <branch-name>. 
 * - git log --oneline origin/<remote-branch-name>..HEAD: (thường sử dụng trong trường hợp xem các commit chưa được push) 
 * - git log --oneline <hash-commitA>..<hash-commitB> - Hiển thị các commit trong khoảng <commit-A> đến <commit-B>
 * - git log --oneline <branch-A>..<branch-B> - Hiển thị các commit có trong <branch-B> nhưng không có trong<branch-A>
 * -> Lưu ý là: branch có thêm tiền tố "origin/" là các branch trên remote repository 
 * 
 * - git log --decorate: (lý thuyết: xem nhánh nào trỏ đến từng commit nào)
 * -> Tuy nhiên khi dùng thử thì chưa thấy rõ tác dụng
 * 
 * - git log --graph: hiển thị biểu đồ flow git
 * -> thường dùng: <git log --oneline --graph --all>
 * - hoặc sử dụng: git log --oneline --graph <name-branch1> <name-branch2> <...>: để xem graph của các branch được chỉ định
 */