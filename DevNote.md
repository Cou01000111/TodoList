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
Vue.js(+Vuetify) + TypeScript + local storage

### 新規使用技術
- Adobe XD
- Adobe XD ui kit
- Vuetify UI Kit Adobe Xd

## 使用予定色
https://colorbase.app/palettes/preview?colors=13d6a7-1f3732-0d8f6f-064738&name=todolist

## オブジェクト
### rootオブジェクト

```json
{
    "root":{
        "task_list":task[],
        "tag_list":tag[]
    }
}

```

### jsonオブジェクト

```json
{
    "task":{
        "priority":number,
        "deadline":string(Date)|null,
        "parent":task,
        "child_list":number[],
        "name":string,
        "tag_id_list":number[]
    }
}
```

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
