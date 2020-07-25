<template>
  <v-container>
    <section class="flow">
      <h1>お買い物の流れ</h1>
      <p>当店でのお買い物の流れは下記の通りです。</p>
      <ol class="flow_container">
        <li class="flow_item">
          <Card>
            <template #heading>
              1. お客様
            </template>
            <template #txt>
              <ol>
                <li>商品をカートに入れる</li>
                <li>カートの中身を確認</li>
                <li>お客さま情報の入力</li>
                <li>お届け先情報の入力</li>
                <li>申し込み</li>
              </ol>
            </template>
          </Card>
        </li>
        <li class="flow_item">
          <Card>
            <template #heading>
              2. お店
            </template>
            <template #txt>
              <ol>
                <li>申し込み内容を自動返信メールでお知らせ</li>
                <li>在庫の確認・送料の決定</li>
                <li>合計金額と振込先をメールでお知らせ（注文確定）</li>
              </ol>
            </template>
          </Card>
        </li>
        <li class="flow_item">
          <Card>
            <template #heading>
              3. お客様
            </template>
            <template #txt>
              <ol>
                <li>お振込み</li>
              </ol>
            </template>
          </Card>
        </li>
        <li class="flow_item">
          <Card>
            <template #heading>
              4. お店
            </template>
            <template #txt>
              <ol>
                <li>お振込みの確認後、商品を発送</li>
                <li>発送完了をメールでお知らせ</li>
              </ol>
            </template>
          </Card>
        </li>
        <li class="flow_item">
          <Card>
            <template #heading>
              5. お客様
            </template>
            <template #txt>
              <ol>
                <li>商品のお受け取り</li>
              </ol>
            </template>
          </Card>
        </li>
      </ol>
    </section>
  </v-container>
</template>

<script>
import Card from '~/components/molecules/Card'

export default {
  components: {
    Card
  }
}
</script>

<style lang="scss" scoped>
ol {
  list-style: none;
}

.flow {
  margin: 0 auto;

  @include breakpoint-up(md) {
    width: 900px;
  }
}

.flow_item {
  + .flow_item {
    margin-top: 20px;
  }
}
</style>
