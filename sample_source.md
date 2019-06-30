# pandoc_template_navbutton_html_usage_sample

## 概要

[matunnkazumi/pandoc_template_navbutton_html](https://github.com/matunnkazumi/pandoc_template_navbutton_html)の使い方の簡単なサンプルです。

## リポジトリ

[matunnkazumi/pandoc_template_navbutton_html_usage_sample](https://github.com/matunnkazumi/pandoc_template_navbutton_html_usage_sample)

## ライセンス

[CC0](https://creativecommons.org/publicdomain/zero/1.0/legalcode)

組み込んでいる外部ファイルはそれぞれのライセンスを確認してください。

## ビルド方法

### 必要なもの
- [Pandoc](https://pandoc.org/)
- [node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### コマンド

```
git clone --recursive https://github.com/matunnkazumi/pandoc_template_navbutton_html_usage_sample
cd pandoc_template_navbutton_html_usage_sample
npm install
npm run build
```

```publish/index.html```にHTMLファイルが生成されます。

## 説明

このリポジトリは、[matunnkazumi/pandoc_template_navbutton_html]で公開しているPandocテンプレートとlessファイルを簡単に動作確認するためのものです。

ご利用の際は、このリポジトリを参考に、ご自身のビルド手順に適宜組み込んでください。

### template.html

[matunnkazumi/pandoc_template_navbutton_html](https://github.com/matunnkazumi/pandoc_template_navbutton_html)で公開しているPandocテンプレートファイルです。pandocコマンドの```--template```オプションで渡してください。

### style.less

[matunnkazumi/pandoc_template_navbutton_html](https://github.com/matunnkazumi/pandoc_template_navbutton_html)で公開しているスタイルファイルです。上述のテンプレートに適用するスタイルです。[Less](http://lesscss.org/)形式で記述していますので、コンパイルしてCSSに変換してください。

変換したCSSファイルをテンプレートと一緒に、pandocコマンドに渡してください。

配色はless実行時のオプションで上書きできるようにしています。詳細はbuild.jsの中身を参考にしてください。

### build.js

上述の手順をスクリプトにしたものです。less形式コンパイル・ファイル出力と、必要なオプションを指定して、pandocコマンドを実行しています。

### アイコン

このサンプルには、[material-design-icons](https://github.com/google/material-design-icons)を利用しています。

テンプレートは、オプションを利用して表示するアイコンを外部から設定できるようにしています。

