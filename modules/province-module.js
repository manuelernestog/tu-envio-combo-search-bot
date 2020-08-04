module.exports = {
    get_chat_id_by_province: function (province) {
        switch (province) {
            case "test":
                return "-1001483673749";
            case "habana":
                return "-1001486503580";
            case "ciego":
                return "-1001350572599";
            case "pinar":
                return "-1001493550843";
            case "artemisa":
                return "-1001208969284";
            case "mayabeque":
                return "-1001204500414";
            case "matanzas":
                return "-1001431719945";
            case "cienfuegos":
                return "-1001327687490";
            case "villaclara":
                return "-1001447290535";
            case "sancti":
                return "-1001494280689";
            case "camaguey":
                return "-1001481585696";
            case "tunas":
                return "-1001361748881";
            case "holguin":
                return "-1001426956808";
            case "granma":
                return "-1001444359123";
            case "santiago":
                return "-1001431879802";
            case "guantanamo":
                return "-1001279096550";
            case "isla":
                return "-1001346048261";
        }
    },
    get_province_btn: function () {
        return buttons = {
            reply_markup: {
                inline_keyboard: [
                    [
                        {text: "Pinar del Rio", url: 'https://t.me/joinchat/AAAAAFkFxvvb3O4njcuZYw'},
                        {text: "Artemisa", url: 'https://t.me/TuEnvioComboAlertArtemisa'}
                    ],
                    [
                        {text: "La Habana", url: 'https://t.me/tuEnvioComboAlertHabana'},
                        {text: "Mayabeque", url: 'https://t.me/joinchat/AAAAAEfLN74Tu7oZfEEc3g'}
                    ],
                    [
                        {text: "Matanzas", url: 'https://t.me/joinchat/AAAAAFVWUAnYmLqsoLDfGQ'},
                        {text: "Cienfuegos", url: 'https://t.me/joinchat/AAAAAE8i50Lq7aUHK71dxg'}
                    ],
                    [
                        {text: "Villa Clara", url: 'https://t.me/joinchat/AAAAAFZD5qeGSE_3mAnTcg'},
                        {text: "Sancti Spiritus", url: 'https://t.me/joinchat/AAAAAFZD5qeGSE_3mAnTcg'}
                    ],
                    [
                        {text: "Ciego de Avila", url: 'https://t.me/joinchat/AAAAAFCAGjeqthefiLNuDw'},
                        {text: "Camaguey", url: 'https://t.me/joinchat/AAAAAFhPNCD22vlBmEmF7w'}
                    ],
                    [
                        {text: "Las Tunas", url: 'https://t.me/joinchat/AAAAAFEqo5EgH7VhK6H29Q'},
                        {text: "Holguin", url: 'https://t.me/joinchat/AAAAAFUNoggr1gxot-AvzQ'}
                    ],
                    [
                        {text: "Granma", url: 'https://t.me/joinchat/AAAAAFYXK9NBYT6HXRiJ5g'},
                        {text: "Santiago de Cuba", url: 'https://t.me/joinchat/AAAAAFVYwHqWsTWR-ghwPw'}
                    ],
                    [
                        {text: "Guantanamo", url: 'https://t.me/joinchat/AAAAAEw9dub5tigGQ0rlFA'},
                        {text: "Isla de la Juventud", url: 'https://t.me/joinchat/AAAAAFA7EQURnwLETctxfA'}
                    ]
                ]
            }
        }
    }
}
