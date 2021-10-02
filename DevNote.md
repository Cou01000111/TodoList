# TodoList

## 実装予定機能

### タスクについて

- タスクの登録
- タスクへのタグ付け
- タスクへの優先度付け
- 子タスクの登録
- タスクの締め切り

### タスクの閲覧について

- 優先度順、締め切り順
- タグでの絞り込み

## 使用技術予定

Vue<del>3</del>2 + TypeScript

### 新規使用技術
- <del>Vue3.ts(Composition API)</del>vue3&typescript&composition APIを初見でやるのは思ったより難しかったので↓
- Vue2.ts(Class-Style)
- Vuetify以外のVue用cssライブラリ

## 使用予定色
https://colorbase.app/palettes/my?paletteId=d7473e42-2d1e-4710-b5bb-eaa146b79101

## オブジェクト
### rootオブジェクト

```json
{
    "user_data":{
        "task_list":task[],
        "tag_list":tag[]
    }
}

```

### jsonオブジェクト

```json
{
    "task":{
        "id":number,
        "priority":number,
        "deadline":string(Date)|null,
        "parent_id":number,
        "name":string,
        "description":string,
        "child_list":number[],
        "tag_id_list":number[]
    }
}
```

idはかぶっていはいけない
deadlineは""でもいい
deadlineの書式はYYYYMMDD(例:20211231)

### tagオブジェクト

```json
{
    "tag":{
        "id":number,
        "name":string,
        "color":string
    }
}
```

## UI

### Home
```
[sort{降順,昇順}][new task](タスク新規作成)[tag list](tag list表示)

|優先度|締め切り|タスク名 tag[] [✏](編集中)[🗑](削除) +|
```
#### 編集中
```
|優先度|締め切り|タスク名 tag× tag× tag× + ✏🗑 +|
```

### タスク新規作成
```
タスク名:______
タグリスト: tag list 
優先順位（オプション）:____
締め切り（オプション）:____
```

### 削除
```
%task.name%を削除します。
本当によろしいですか？
    はい      いいえ
```
