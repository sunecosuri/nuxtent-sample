あけましておめでとうございます。平成30年の実感が湧かないロリポップ！マネージドクラウド開発チームの @sunecosuri です。平成の歌姫こと安室奈美恵さんの引退がより平成の終わりをしみじみと感じますね。
さて、今回はマネージドクラウドでNuxt.jsを用いたWeb制作フローを提案していきたいと思います。

## Webサイトの制作で抱える課題
- ブログのみの機能だったらWordPressで事足りるが、独自プラグインを作るなどするとアップデート時に都度追従して対応するなど運用コストが掛かって大変だった。
- コメントを受け付けたり、なんらかのデータを元にしているような動的にしたいところは限られているので、基本は静的でいい

## Nuxt.js とは
Nuxt.jsはVue.js製のフロントエンドフレームワークと呼ばれており、サーバーサイドレンダリング対応をはじめとして、ルーティングの自動生成などを行ってくれるツールです。

### 静的生成
Nuxt.jsのもう一つの大きな特長は、generateコマンドで静的なWebサイトを生成できることです。今回はJekyll、Hexo、Hudoといった静的サイトジェネレーターのようにNuxt.jsで簡単にコンテンツを扱うことができるNuxtentというツールを用いて行いたいと思います。

Nodeプロジェクトを作成後、`あなたのWEBサイト` を見るをクリックします。
![image](https://git.pepabo.com/storage/user/678/files/2455878a-f1a8-11e7-8dfa-8a62c770bc17)
下の画面が表示されることをまず確認します。
![image](https://git.pepabo.com/storage/user/678/files/43c78988-f1a8-11e7-8f37-93862570c3bc)

実際に手元でターミナルを立ち上げて任意のディレクトリに移動後、以下のコマンドを上から順に入力します  
**※ コンテナにSSHログインする必要はありません。**
```sh
npm install -g vue-cli // vue-cli をインストールする
vue init nuxt-community/nuxtent-template mclolipop-node-sample // nuxtent のセットアップをする
cd mclolipop-node-sample // 対象プロジェクトのディレクトリへ移動
git init // git のセットアップ
npm install // 依存パッケージをインストール
npm run dev // 開発者モードで環境を立ち上げる
```
以下の画面が表示されたら`http://localhost:3000/hello-world`にアクセスします
![image](https://git.pepabo.com/storage/user/678/files/adaef3c0-f1af-11e7-982c-1e20f8491b79)  
このような画面が表示されればまずは成功です
![image](https://git.pepabo.com/storage/user/678/files/31ce9100-f1ac-11e7-9b3e-c2334b72c557)

# レイアウトを決める




## まとめ
私は前職でWebサイトの制作などを行っていたのですが、マネージドクラウドのよう
 - 単一ファイルコンポーネントによる、設計の簡略化
 - Scoped CSS でコンポーネント作成がやりやすく
 - テンプレートエンジンとしても利用できる
