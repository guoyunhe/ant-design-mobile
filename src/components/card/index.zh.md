# Card 卡片

通用卡片容器。

## 何时使用

可承载文字、列表、图片、段落等，便于用户浏览内容。

## 示例

<code src="./demos/demo1.tsx"></code>

## Card

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| bodyClassName | body 自定义类名 | `string` | - |
| bodyStyle | body 自定义样式 | `React.CSSProperties` | - |
| extra | header 右边区域 | `ReactNode` | - |
| headerClassName | header 自定义类名 | `string` | - |
| headerStyle | header 自定义样式 | `React.CSSProperties` | - |
| onBodyClick | body 区域点击事件 | `(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void` | - |
| onClick | 卡片点击事件 | `(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void` | - |
| onHeaderClick | header 区域点击事件 | `(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void` | - |
| title | header 左边区域 | `ReactNode` | - |

### CSS 变量

| 属性            | 说明       | 默认值  | 全局变量                   |
| --------------- | ---------- | ------- | -------------------------- |
| --border-radius | 圆角大小   | `4px`   | `--adm-card-border-radius` |
| --padding-x     | 水平内边距 | `solid` | `--adm-card-padding-x`     |
| --padding-y     | 垂直内边距 | `solid` | `--adm-card-padding-y`     |
