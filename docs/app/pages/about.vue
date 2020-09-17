<template>
<v-container fluid>
    <v-row dense>
        <v-col cols sm="12">
            <v-card>
                <v-card-title>このウェブサイトについて</v-card-title>

                <v-card-text>
                    エオルゼアにあまた存在する、皆様の手で個性豊かに創られたハウジングによるイベントやスペースを、一覧として "可視化" することで交流のきっかけが増えれば良いな、という思いからはじまったウェブサービスのプロジェクトです。
                </v-card-text>

                <v-card-text class="pt-0">
                    コミュニティの文化として "カフェ" や "喫茶" といったお名前を付けられている方が多くいらっしゃるため、このウェブサービスもなぞらえ "カフェテリア" といたしました。
                </v-card-text>
            </v-card>
        </v-col>

        <v-col cols sm="12">
            <v-card>
                <v-card-title>掲載許可について</v-card-title>

                <v-card-text>
                    このウェブサイトに掲載されているイベントやスペースは全て、オーナー様(または代理の方)のもとへお伺いして掲載許可を得ております。
                </v-card-text>

                <v-card-text class="pt-0">
                    細心の注意を払っているため万が一ではありますが、未許可での掲載がございましたら、お手数ですが一報を頂ければ直ちに修正いたします。
                </v-card-text>
            </v-card>
        </v-col>

        <v-col cols sm="12">
            <v-card>
                <v-card-title>共同開発者募集</v-card-title>

                <v-card-text>
                    このプロジェクトは現在、私ひとりで企画・開発・運営の全てを行っておりますが、ひとりではモチベーションを保てないとき...お手伝いしていただける共同開発者様を募集しております。
                </v-card-text>
            </v-card>
        </v-col>

        <v-col cols sm="12">
            <v-card>
                <v-card-title>お問い合わせ</v-card-title>

                <v-card-text>
                    掲載依頼やバグ報告などの各種お問い合わせは、以下のいずれかもしくはゲーム内チャットにてお願いいたします。
                </v-card-text>

                <v-list class="mx-4">
                    <template v-for="(contact, i) in contacts">
                        <v-divider v-if="i" :key="i"></v-divider>
                        <v-list-item :key="i" :href="contact.href" target="_blank" rel="noopener">
                            <v-list-item-icon class="mr-6">
                                <v-icon>{{contact.icon}}</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title>{{contact.service}}</v-list-item-title>
                                <v-list-item-subtitle>{{contact.account}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </template>
                </v-list>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
return {
    data(){
        return {
            contacts: [{
                service: "GitHub",
                account: "dojyorin/ffxiv_cafeteria",
                href: "https://github.com/dojyorin/ffxiv_cafeteria",
                icon: "mdi-github"
            }, {
                service: "Twitter",
                account: "@dojyorin",
                href: "https://twitter.com/dojyorin",
                icon: "mdi-twitter"
            }, {
                service: "Lodestone",
                account: "Raycharles Halwen",
                href: "https://jp.finalfantasyxiv.com/lodestone/character/?q=Raycharles+Halwen&gcid=3&blog_lang=ja",
                icon: "mdi-gamepad-square-outline"
            }]
        };
    }
}
</script>