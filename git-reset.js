/**  
 * @_GIT_RESET
 * 
 * @Description
 * !Git reset is used for case want undo some commit or switch branch-pointer to another commit (with state change or not). 
 * todo: Follow some feature of git reset below:
 * 
 * - git reset --soft <commit-hash>: move "current-branch-pointer", "HEAD-pointer" to <commit-hash> with "different" state change push into <index/staged-area>
 * 
 * - git reset --mixed (defalt): undo all state change on <index/staged-area> into <working-tree-area> || ~undo git-add (có thể thêm đường dẫn file chỉ định để thay đổi 1 phần)
 * -> Thường dùng để loại bỏ các file thay đổi được thêm và staged-area bởi git-add
 * 
 * - git reset --mixed <commit-hash>: move "current-branch-pointer", "HEAD-pointer" to <commit-hash> with "different" state change push into <working-tree-area>
 * 
 * - git reset --hard: undo all state change || ~the same "discard-all-change" (có thể thêm đường dẫn file chỉ định để thay đổi 1 phần)
 * -> Thường dùng để discard change
 * 
 * - git reset --hard <commit-hash>: move "current-branch-pointer", "HEAD-pointer" to <commit-hash> with remove all change
 * -> Thường dùng để undo hoàn toàn các commit trên branch
 * 
 * ?Tip:
 * - Có thể sử dụng git-reset để gộp các commit cuối cùng gần kề và tạo thành 1 commit mới
 */