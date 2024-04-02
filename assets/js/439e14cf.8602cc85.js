"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[700],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>g});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(t),d=l,g=u["".concat(s,".").concat(d)]||u[d]||c[d]||r;return t?a.createElement(g,i(i({ref:n},m),{},{components:t})):a.createElement(g,i({ref:n},m))}));function g(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8029:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=t(7462),l=(t(7294),t(3905));const r={title:"R for data science",description:"R for data science\u8bfb\u4e66\u7b14\u8bb0"},i="R for data science",o={unversionedId:"R/R",id:"R/R",title:"R for data science",description:"R for data science\u8bfb\u4e66\u7b14\u8bb0",source:"@site/docs/R/R.md",sourceDirName:"R",slug:"/R/",permalink:"/Walk-on/docs/R/",draft:!1,editUrl:"https://github.com/LinZhifana/Walk-on/docs/R/R.md",tags:[],version:"current",frontMatter:{title:"R for data science",description:"R for data science\u8bfb\u4e66\u7b14\u8bb0"},sidebar:"tutorialSidebar",previous:{title:"R",permalink:"/Walk-on/docs/category/r"},next:{title:"JavaScript",permalink:"/Walk-on/docs/category/javascript"}},s={},p=[{value:"Data visualization",id:"data-visualization",level:2},{value:"data frame",id:"data-frame",level:3},{value:"ggplot",id:"ggplot",level:3},{value:"Visualizing distributions",id:"visualizing-distributions",level:3},{value:"Visualizing relationships",id:"visualizing-relationships",level:3},{value:"Save",id:"save",level:3},{value:"Workflow",id:"workflow",level:2},{value:"Data transformation",id:"data-transformation",level:2},{value:"Rows",id:"rows",level:3},{value:"Columns",id:"columns",level:3},{value:"The pipe",id:"the-pipe",level:3},{value:"Groups",id:"groups",level:3},{value:"Data tidying",id:"data-tidying",level:2}],m={toc:p},u="wrapper";function c(e){let{components:n,...t}=e;return(0,l.kt)(u,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"r-for-data-science"},"R for data science"),(0,l.kt)("h2",{id:"data-visualization"},"Data visualization"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ggplots2")," implements the grammar of graphic"),(0,l.kt)("h3",{id:"data-frame"},"data frame"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"variable"),": a quantity, quality, or property that you can measure"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"value"),": the state of a variable when you measure it. The value of a variable may change from measurement to measurement."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"observation"),": a set of measurements made under similar conditions (you usually make all of the measurements in an observation at the same time and on the same object). An observation will contain several values, each associated with a different variable. We\u2019ll sometimes refer to an observation as a ",(0,l.kt)("strong",{parentName:"li"},"data point"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"tabular data"),": is a set of values, each associated with a variable and an observation. Tabular data is ",(0,l.kt)("em",{parentName:"li"},"tidy")," if each value is placed in its own \u201ccell\u201d, each variable in its own column, and each observation in its own row.")),(0,l.kt)("h3",{id:"ggplot"},"ggplot"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-r"},'# canvas\nggplot(\n  data = penguins, # \u6570\u636e\u96c6\n  # aesthetics\n  mapping = aes(\n    x = flipper_length_mm,\n    y = body_mass_g,\n    # scaling\n    color = species\n  )\n)\n+\n# geometrical object\n# geom_bar()/geom_line()/geom_boxplot()\ngeom_point()\n+\n# layers\n# fit on a linear model\ngeom_smooth(method = "lm") +\n# \u6807\u7b7e\nlabs(\n  title = "Body mass and flipper length",\n  subtitle = "Dimensions for Adelie, Chinstrap, and Gentoo Penguins",\n  x = "Flipper length (mm)", y = "Body mass (g)",\n  color = "Species", shape = "Species"\n)\n+\n# \u8272\u76f2\u53cb\u597d\nscale_color_colorblind()\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"scaling"),": When a categorical variable is mapped to an aesthetic, ggplot2 will automatically assign a unique value of the aesthetic"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"global level"),": \u5168\u5c40\u7ea7\u522b\u7684\u7f8e\u5b66\u6620\u5c04\u662f\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"ggplot()"),"\u51fd\u6570\u4e2d\u5b9a\u4e49\u7684, \u5b83\u4eec\u5c06\u88ab\u4f20\u9012\u7ed9\u7ed8\u56fe\u4e2d\u7684\u6240\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"geom")," \u56fe\u5c42(\u51e0\u4f55\u56fe\u5f62\u5c42)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"local level"),": \u5c40\u90e8\u7ea7\u522b\u7684\u7f8e\u5b66\u6620\u5c04\u662f\u5728\u5177\u4f53\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"geom")," \u51fd\u6570\u4e2d\u5b9a\u4e49\u7684, \u5b83\u4eec\u4ec5\u9002\u7528\u4e8e\u8be5 ",(0,l.kt)("inlineCode",{parentName:"p"},"geom")," \u56fe\u5c42"),(0,l.kt)("h3",{id:"visualizing-distributions"},"Visualizing distributions"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"categorical"),": a variable can only take one of a small set values."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-r"},"# fct_inorder()/fct_infreq()/fct_inseq\n# Reorder factor levels by first appearance, frequency, or numeric order\nggplot(penguins, aes(x = fct_infeq(species)))\n+\ngeom_bar()\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"numerical"),"/",(0,l.kt)("strong",{parentName:"p"},"quantitative"),": a variable can take on a wide range of numerical values, and it's sensible to add, substracy, or take averages with those values."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"numerical")," can be ",(0,l.kt)("strong",{parentName:"p"},"continuous")," or ",(0,l.kt)("strong",{parentName:"p"},"discrete"),"."),(0,l.kt)("hr",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-r"},"ggplot(penguins, aes(x = body_mass_g)) +\n  geom_histogram(binwidth = 200)\n\nggplot(penguins, aes(x = body_mass_g)) +\n  geom_density()\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"histogram"),": for distributions of continuous variables"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"density plot"),": for distributions of numerical variables"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"geom_bar()")," \u7684\u989c\u8272:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8fb9\u6846\u586b\u5145 ",(0,l.kt)("inlineCode",{parentName:"li"},'geom_bar(color = "red")')),(0,l.kt)("li",{parentName:"ul"},"\u5185\u5bb9\u586b\u5145 ",(0,l.kt)("inlineCode",{parentName:"li"},'geom_bar(fill = "red")'))),(0,l.kt)("h3",{id:"visualizing-relationships"},"Visualizing relationships"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"boxplot"),": for relationship between a numerical and a categorical variable"),(0,l.kt)("p",null,"A ",(0,l.kt)("strong",{parentName:"p"},"boxplot")," is a type of visual shorthand for measures of position(percentiles, \u767e\u5206\u4f4d\u6570) that describe a distribution"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-r"},"ggplot(penguins, aes(x = species, y = body_mass_g)) +\n  geom_boxplot()\n\nggplot(penguins, aes(x = body_mass_g, color = species)) +\n  geom_density(linewidth = 0.75)\n")),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"stacked bar plots"),": for relationship between two categorical variables."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-r"},'ggplot(penguins, aes(x = island, fill = species)) +\n  geom_bar()\n# \u521b\u5efa\u9891\u7387\u56fe\nggplot(penguins, aes(x = island, fill = species)) +\n  geom_bar(position = "fill")\n')),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"scatterplots and smooth curves"),": for relationship between two numerical variables."),(0,l.kt)("hr",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-r"},"ggplot(penguins, aes(x = flipper_length_mm, y = body_mass_g)) +\n  geom_point(aes(color = species, shape = island))\n\nggplot(penguins, aes(x = flipper_length_mm, y = body_mass_g)) +\n  geom_point(aes(color = species, shape = species)) +\n  # \u4ee5 island \u5206\u5f00\n  facet_wrap(~island)\n")),(0,l.kt)("h3",{id:"save"},"Save"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'ggsave(filename = "filename.png")')),(0,l.kt)("h2",{id:"workflow"},"Workflow"),(0,l.kt)("p",null,"keyboard shortcut:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<-"),": Alt + -"),(0,l.kt)("li",{parentName:"ul"},"comment: Ctrl + Shift + C"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%>%"),": Ctrl + Shift + M")),(0,l.kt)("h2",{id:"data-transformation"},"Data transformation"),(0,l.kt)("h3",{id:"rows"},"Rows"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"filter()"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-r"},"flights |>\n  filter(month == 1 & day == 1)\n\nflights |>\n  filter(month == 1 | month == 2)\n\n# \u6216 \u7b49\u4ef7\u4e8e\nflights |>\n  filter(month %in% c(1, 2))\n\n")),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"arrange()"))),(0,l.kt)("p",null,"changes the order of rows based on the value of the columns."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-r"},"flights |>\n  arrange(year, month, day)\n\nflights |>\n  arrange(des(dep_delay))\n")),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"distinct()"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-r"},"# remove duplicate rows, if any\nflights |>\n  distinct()\n\n# find all unique origin and destination pairs\nflights |>\n  distinct(origin, dest)\n\n# keep other columns when filtering for unique rows\nflights |>\n  distinct(origin, dest, .keep_all = TRUE)\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},".")," \u5f00\u5934\u7684\u53d8\u91cf\u4ee3\u8868\u662f\u51fd\u6570\u81ea\u5e26\u7684\u53d8\u91cf, \u4e0d\u662f\u5217\u540d")),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"count()"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-r"},"flights |>\n  count(origin, dest, sort = TRUE)\n\n")),(0,l.kt)("h3",{id:"columns"},"Columns"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"mutate()"))),(0,l.kt)("p",null,"create new columns that are derived from the existing columns"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-r"},'flights |>\n  mutate(\n    gain = dep_delay - arr_delay,\n    speed = distance / air_time * 60\n  )\n\n# \u63d2\u5728\u7b2c\u4e00\u5217\nflights |>\n  mutate(\n    gain = dep_delay - arr_delay,\n    speed = distance / air_time * 60,\n    .before = 1\n  )\n\n# \u63d2\u5728 day \u5217\u4e4b\u540e\nflights |>\n  mutate(\n    gain = dep_delay - arr_delay,\n    speed = distance / air_time * 60,\n    .after = day\n  )\n\n# \u4fdd\u7559\u88ab\u4f7f\u7528\u8fc7\u7684\u5217\n\nflights |>\n  mutate(\n    gain = dep_delay - arr_delay,\n    hours = air_time / 60,\n    gain_per_hour = gain / hours,\n    .keep = "used"\n  )\n')),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"select()"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-r"},"# select columns by name\nflights |>\n  select(year, month, day)\n\n# select all columns between year and day(inclusive)\nflights |>\n  select(year:day)\n\n# select all columns except those from year to day(inclusive)\nflights |>\n  select(!year:day) # -(year:day) \u7b49\u4ef7\u4e8e !(year:day)\n\n# select all columns that are characters\nflights |>\n  select(where(is.character))\n")),(0,l.kt)("p",null,"There are a number of helper functions you can use within ",(0,l.kt)("inlineCode",{parentName:"p"},"select()"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'starts_with("abc")'),": matches names that begin with \u201cabc\u201d."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'ends_with("xyz")'),": matches names that end with \u201cxyz\u201d."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'contains("ijk")'),": matches names that contain \u201cijk\u201d."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'num_range("x", 1:3)'),": matches x1, x2 and x3."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'match("[pt]al")'),': matches names that contains "pal" or "tal"')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-r"},"# rename\n# \u65b0\u540d\u5b57 = \u65e7\u540d\u5b57\nflights |>\n  select(tail_num = tailnum)\n")),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"rename()"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-r"},"# \u7b49\u4ef7\u4e0a\u9762 select\nflights |>\n  rename(tail_num = tailnum)\n")),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"relocate()"))),(0,l.kt)("p",null,"change the position of columns"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-r"},'# by default, relocate() moves variables to the front\nflights |>\n  relocate(time_hour, air_time)\n\nflights |>\n  relocate(year:dep_time, .after = time_hour)\nflights |>\n  relocate(starts_with("arr"), .before = dep_time)\n')),(0,l.kt)("h3",{id:"the-pipe"},"The pipe"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"|>")," \u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"%>%")," \u7b80\u5316\u7248"),(0,l.kt)("h3",{id:"groups"},"Groups"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"group_by()"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-r"},"flights |>\n  group_by(year, month)\n")),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"summarize()"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-r"},"flights |>\n  group_by(month) |>\n  summarize(\n    avg_delay = mean(dep_delay, na.rm = TRUE),\n    n = n() # \u8fd4\u56de\u6bcf\u7ec4\u884c\u6570\n  )\n\n# \u76f4\u63a5\u4f7f\u7528 .by \u8fdb\u884c\u5206\u7ec4\nflights |>\n  summarize(\n    delay = mean(dep_delay, na.rm = TRUE),\n    n = n(),\n    .by = c(origin, dest)\n  )\n")),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"slice_"))," functions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"df |> slice_head(n = 1)")," takes the first row from each group."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"df |> slice_tail(n = 1)")," takes the last row in each group."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"df |> slice_min(x, n = 1)")," takes the row with the smallest value of column x."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"df |> slice_max(x, n = 1)")," takes the row with the largest value of column x."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"df |> slice_sample(n = 1)")," takes one random row.")),(0,l.kt)("p",null,"\u53ef\u4ee5\u6539\u53d8 ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," \u503c\u9009\u62e9\u66f4\u591a\u7684\u884c, \u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"prop")," \u4ee3\u66ff, \u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"prop = 0.1")," \u9009\u51fa\u524d 10% \u7684\u884c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-r"},"flights |>\n  group_by(dest) |>\n  slice_max(arr_delay, n = 1) |>\n  relocate(dest)\n")),(0,l.kt)("p",null,"\u5728\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"summarize()"),"\u51fd\u6570\u5bf9\u4e00\u4e2a\u6570\u636e\u96c6\u8fdb\u884c\u6c47\u603b\u65f6, \u5982\u679c\u6570\u636e\u96c6\u5df2\u7ecf\u6309\u7167\u591a\u4e2a\u53d8\u91cf\u8fdb\u884c\u4e86\u5206\u7ec4, \u90a3\u4e48\u9ed8\u8ba4\u60c5\u51b5\u4e0b, \u6bcf\u6b21\u6c47\u603b\u64cd\u4f5c\u90fd\u4f1a\u64a4\u9500\u6389\u6700\u540e\u4e00\u5c42\u5206\u7ec4\u3002\u6362\u53e5\u8bdd\u8bf4, \u6bcf\u6b21\u6c47\u603b\u64cd\u4f5c\u90fd\u4f1a\u5c06\u6570\u636e\u96c6\u7684\u5206\u7ec4\u5c42\u6b21\u51cf\u5c11\u4e00\u7ea7\u3002"),(0,l.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50, \u5047\u8bbe\u6709\u4e00\u4e2a\u6570\u636e\u96c6\u6309\u7167\u5730\u533a\u548c\u5e74\u4efd\u8fdb\u884c\u4e86\u5206\u7ec4, \u7136\u540e\u6211\u4eec\u5bf9\u8fd9\u4e2a\u6570\u636e\u96c6\u8fdb\u884c\u6c42\u548c\u64cd\u4f5c\u3002\u5982\u679c\u9ed8\u8ba4\u884c\u4e3a\u88ab\u4fdd\u7559, \u90a3\u4e48\u5728\u5bf9\u6570\u636e\u96c6\u8fdb\u884c\u6c42\u548c\u540e, \u7ed3\u679c\u5c06\u4e0d\u518d\u6309\u7167\u5e74\u4efd\u8fdb\u884c\u5206\u7ec4, \u800c\u53ea\u6309\u7167\u5730\u533a\u8fdb\u884c\u5206\u7ec4\u3002\u8fd9\u6837\u5c31\u5c11\u4e86\u4e00\u5c42\u5206\u7ec4, \u5373\u201c\u5e74\u4efd\u201d\u8fd9\u4e00\u5c42\u88ab\u64a4\u9500\u4e86\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-r"},'# \u89e3\u51b3\u65b9\u6848\ndaily <- flights |>\n  group_by(year, month, day)\n\ndaily_flights <- daily |>\n  summarize(\n    n = n(),\n    .groups = "drop_last"\n  )\n')),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ungroup()"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-r"},"daily |>\n  ungroup()\n")),(0,l.kt)("h2",{id:"data-tidying"},"Data tidying"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u201cHappy families are all alike; every unhappy family is unhappy in its own way.\u201d\n\u2014 Leo Tolstoy")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u201cTidy datasets are all alike, but every messy dataset is messy in its own way.\u201d\n\u2014 Hadley Wickham")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Each variable is a column; each column is a variable."),(0,l.kt)("li",{parentName:"ul"},"Each observation is a row; each row is an observation."),(0,l.kt)("li",{parentName:"ul"},"Each value is a cell; each cell is a single value.")))}c.isMDXComponent=!0}}]);