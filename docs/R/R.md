---
title: R for data science
description: R for data science读书笔记
---

# R for data science

## Data visualization

`ggplots2` implements the grammar of graphic

### data frame

- **variable**: a quantity, quality, or property that you can measure
- **value**: the state of a variable when you measure it. The value of a variable may change from measurement to measurement.
- **observation**: a set of measurements made under similar conditions (you usually make all of the measurements in an observation at the same time and on the same object). An observation will contain several values, each associated with a different variable. We’ll sometimes refer to an observation as a **data point**.
- **tabular data**: is a set of values, each associated with a variable and an observation. Tabular data is _tidy_ if each value is placed in its own “cell”, each variable in its own column, and each observation in its own row.

### ggplot

```r
# canvas
ggplot(
  data = penguins, # 数据集
  # aesthetics
  mapping = aes(
    x = flipper_length_mm,
    y = body_mass_g,
    # scaling
    color = species
  )
)
+
# geometrical object
# geom_bar()/geom_line()/geom_boxplot()
geom_point()
+
# layers
# fit on a linear model
geom_smooth(method = "lm") +
# 标签
labs(
  title = "Body mass and flipper length",
  subtitle = "Dimensions for Adelie, Chinstrap, and Gentoo Penguins",
  x = "Flipper length (mm)", y = "Body mass (g)",
  color = "Species", shape = "Species"
)
+
# 色盲友好
scale_color_colorblind()
```

**scaling**: When a categorical variable is mapped to an aesthetic, ggplot2 will automatically assign a unique value of the aesthetic

**global level**: 全局级别的美学映射是在`ggplot()`函数中定义的, 它们将被传递给绘图中的所有 `geom` 图层(几何图形层)

**local level**: 局部级别的美学映射是在具体的 `geom` 函数中定义的, 它们仅适用于该 `geom` 图层

### Visualizing distributions

**categorical**: a variable can only take one of a small set values.

```r
# fct_inorder()/fct_infreq()/fct_inseq
# Reorder factor levels by first appearance, frequency, or numeric order
ggplot(penguins, aes(x = fct_infeq(species)))
+
geom_bar()
```

**numerical**/**quantitative**: a variable can take on a wide range of numerical values, and it's sensible to add, substracy, or take averages with those values.

**numerical** can be **continuous** or **discrete**.

---

```r
ggplot(penguins, aes(x = body_mass_g)) +
  geom_histogram(binwidth = 200)

ggplot(penguins, aes(x = body_mass_g)) +
  geom_density()
```

**histogram**: for distributions of continuous variables

**density plot**: for distributions of numerical variables

`geom_bar()` 的颜色:

- 边框填充 `geom_bar(color = "red")`
- 内容填充 `geom_bar(fill = "red")`

### Visualizing relationships

**boxplot**: for relationship between a numerical and a categorical variable

A **boxplot** is a type of visual shorthand for measures of position(percentiles, 百分位数) that describe a distribution

```r
ggplot(penguins, aes(x = species, y = body_mass_g)) +
  geom_boxplot()

ggplot(penguins, aes(x = body_mass_g, color = species)) +
  geom_density(linewidth = 0.75)
```

---

**stacked bar plots**: for relationship between two categorical variables.

```r
ggplot(penguins, aes(x = island, fill = species)) +
  geom_bar()
# 创建频率图
ggplot(penguins, aes(x = island, fill = species)) +
  geom_bar(position = "fill")
```

---

**scatterplots and smooth curves**: for relationship between two numerical variables.

---

```r
ggplot(penguins, aes(x = flipper_length_mm, y = body_mass_g)) +
  geom_point(aes(color = species, shape = island))

ggplot(penguins, aes(x = flipper_length_mm, y = body_mass_g)) +
  geom_point(aes(color = species, shape = species)) +
  # 以 island 分开
  facet_wrap(~island)
```

### Save

`ggsave(filename = "filename.png")`

## Workflow

keyboard shortcut:

- `<-`: Alt + -
- comment: Ctrl + Shift + C
- `%>%`: Ctrl + Shift + M

## Data transformation

### Rows

**`filter()`**

```r
flights |>
  filter(month == 1 & day == 1)

flights |>
  filter(month == 1 | month == 2)

# 或 等价于
flights |>
  filter(month %in% c(1, 2))

```

---

**`arrange()`**

changes the order of rows based on the value of the columns.

```r
flights |>
  arrange(year, month, day)

flights |>
  arrange(des(dep_delay))
```

---

**`distinct()`**

```r
# remove duplicate rows, if any
flights |>
  distinct()

# find all unique origin and destination pairs
flights |>
  distinct(origin, dest)

# keep other columns when filtering for unique rows
flights |>
  distinct(origin, dest, .keep_all = TRUE)
```

> **.** 开头的变量代表是函数自带的变量, 不是列名

---

**`count()`**

```r
flights |>
  count(origin, dest, sort = TRUE)

```

### Columns

**`mutate()`**

create new columns that are derived from the existing columns

```r
flights |>
  mutate(
    gain = dep_delay - arr_delay,
    speed = distance / air_time * 60
  )

# 插在第一列
flights |>
  mutate(
    gain = dep_delay - arr_delay,
    speed = distance / air_time * 60,
    .before = 1
  )

# 插在 day 列之后
flights |>
  mutate(
    gain = dep_delay - arr_delay,
    speed = distance / air_time * 60,
    .after = day
  )

# 保留被使用过的列

flights |>
  mutate(
    gain = dep_delay - arr_delay,
    hours = air_time / 60,
    gain_per_hour = gain / hours,
    .keep = "used"
  )
```

---

**`select()`**

```r
# select columns by name
flights |>
  select(year, month, day)

# select all columns between year and day(inclusive)
flights |>
  select(year:day)

# select all columns except those from year to day(inclusive)
flights |>
  select(!year:day) # -(year:day) 等价于 !(year:day)

# select all columns that are characters
flights |>
  select(where(is.character))
```

There are a number of helper functions you can use within `select()`:

- `starts_with("abc")`: matches names that begin with “abc”.
- `ends_with("xyz")`: matches names that end with “xyz”.
- `contains("ijk")`: matches names that contain “ijk”.
- `num_range("x", 1:3)`: matches x1, x2 and x3.
- `match("[pt]al")`: matches names that contains "pal" or "tal"

```r
# rename
# 新名字 = 旧名字
flights |>
  select(tail_num = tailnum)
```

---

**`rename()`**

```r
# 等价上面 select
flights |>
  rename(tail_num = tailnum)
```

---

**`relocate()`**

change the position of columns

```r
# by default, relocate() moves variables to the front
flights |>
  relocate(time_hour, air_time)

flights |>
  relocate(year:dep_time, .after = time_hour)
flights |>
  relocate(starts_with("arr"), .before = dep_time)
```

### The pipe

`|>` 是 `%>%` 简化版

### Groups

**`group_by()`**

```r
flights |>
  group_by(year, month)
```

---

**`summarize()`**

```r
flights |>
  group_by(month) |>
  summarize(
    avg_delay = mean(dep_delay, na.rm = TRUE),
    n = n() # 返回每组行数
  )

# 直接使用 .by 进行分组
flights |>
  summarize(
    delay = mean(dep_delay, na.rm = TRUE),
    n = n(),
    .by = c(origin, dest)
  )
```

---

**`slice_`** functions

- `df |> slice_head(n = 1)` takes the first row from each group.
- `df |> slice_tail(n = 1)` takes the last row in each group.
- `df |> slice_min(x, n = 1)` takes the row with the smallest value of column x.
- `df |> slice_max(x, n = 1)` takes the row with the largest value of column x.
- `df |> slice_sample(n = 1)` takes one random row.

可以改变 `n` 值选择更多的行, 也可以使用 `prop` 代替, 如 `prop = 0.1` 选出前 10% 的行

```r
flights |>
  group_by(dest) |>
  slice_max(arr_delay, n = 1) |>
  relocate(dest)
```

在使用`summarize()`函数对一个数据集进行汇总时, 如果数据集已经按照多个变量进行了分组, 那么默认情况下, 每次汇总操作都会撤销掉最后一层分组。换句话说, 每次汇总操作都会将数据集的分组层次减少一级。

举个例子, 假设有一个数据集按照地区和年份进行了分组, 然后我们对这个数据集进行求和操作。如果默认行为被保留, 那么在对数据集进行求和后, 结果将不再按照年份进行分组, 而只按照地区进行分组。这样就少了一层分组, 即“年份”这一层被撤销了。

```r
# 解决方案
daily <- flights |>
  group_by(year, month, day)

daily_flights <- daily |>
  summarize(
    n = n(),
    .groups = "drop_last"
  )
```

---

**`ungroup()`**

```r
daily |>
  ungroup()
```

## Data tidying

> “Happy families are all alike; every unhappy family is unhappy in its own way.”
> — Leo Tolstoy

> “Tidy datasets are all alike, but every messy dataset is messy in its own way.”
> — Hadley Wickham

- Each variable is a column; each column is a variable.
- Each observation is a row; each row is an observation.
- Each value is a cell; each cell is a single value.
