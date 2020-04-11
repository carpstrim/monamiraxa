<template>
  <section>
    <h1>お問い合わせ</h1>
    <dl>
      <div>
        <dt>お名前</dt>
        <dd><v-text-field v-model="a" label="" row-height="15" /></dd>
      </div>

      <div>
        <dt>メールアドレス</dt>
        <dd><v-text-field v-model="b" label="" row-height="15" /></dd>
      </div>

      <div>
        <dt>確認のためにもう一度入力してください</dt>
        <dd><v-text-field v-model="c" label="" row-height="15" /></dd>
      </div>

      <div>
        <dt>お問い合わせタイトル</dt>
        <dd><v-text-field v-model="d" label="" row-height="15" /></dd>
      </div>

      <div>
        <dt>内容</dt>
        <dd>
          <v-textarea
            v-model="e"
            label=""
            value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
            hint="Hint text"
          />
        </dd>
      </div>
    </dl>
    <v-btn>送信</v-btn>
  </section>
</template>
