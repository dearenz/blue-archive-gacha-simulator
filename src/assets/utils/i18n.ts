import { createI18n } from 'vue-i18n'

const messages = {
    zh: {
        mainTitle: '学生招募',
        title: '通常招募',
        subtitle: '来招募更多性格迥异的学生吧!',
        notice: '选择招募 10 次，必定获得 1 名 3★ 学生! \n※ 点击右上角按钮切换语言/查看招募记录',
        gacha1: '招募 1 次',
        gacha10: '招募 10 次',
        recruitPoint: '招募点数',
        reset: '重置',
        modalTitle: '通知',
        modalBody: '招募 %num 次？',
        modalAgain: '再次招募？',
        cancel: '取消',
        confirm: '确定',
        history: '招募记录',
        again: '再来一次'
    },
    ja: {
        mainTitle: '生徒募集',
        title: '通常募集',
        subtitle: '個性豊かな生徒たちを募集しましょう!',
        notice: '10回募集では、★2以上の生徒が1人確定! \n※ この右上のボタンをクリックして言語を切り替えたり/募集記録を確認したりしてください。',
        gacha1: '1 回募集',
        gacha10: '10 回募集',
        recruitPoint: '呼び出しポイント',
        reset: 'リセット',
        modalTitle: 'アラート',
        modalBody: '%num 回募集？',
        modalAgain: '続けて募集？',
        cancel: 'キャンセル',
        confirm: 'OK',
        history: '呼び出し生徒',
        again: '続けて募集'
    },
    en: {
        mainTitle: 'Gacha Kontergame',
        title: 'Gacha Voucher KonterGame',
        subtitle: 'Dapatkan voucher diskon hingga 90%!',
        notice: 'Draw 10 kali untuk mendapatkan guaranteed 3★ Reward! \n※ Click the button in the upper right corner to switch languages/view recruitment history.',
        gacha1: 'Draw 1',
        gacha10: 'Draw 10',
        recruitPoint: 'Recruitment Points',
        reset: 'Reset',
        modalTitle: 'Notification',
        modalBody: 'Draw %num time(s)?',
        modalAgain: 'Draw again?',
        cancel: 'Cancel',
        confirm: 'Confirm',
        history: 'Draw History',
        again: 'Try Again'
    }
}

const i18n = createI18n({
    legacy: false,
    globalInjection: true,

    locale: 'en',
    messages
})

export default i18n
