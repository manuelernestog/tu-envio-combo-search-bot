module.exports = {
    get_chat_id_by_province: function (province) {
        switch (province) {
            case "test":
                return "-1001483673749";
            case "habana":
                return "@TuEnvioComboAlertHabana";
            case "ciego":
                return "@TuEnvioComboAlertCiego";
            case "pinar":
                return "@TuEnvioComboAlertPinar";
            case "artemisa":
                return "@TuEnvioComboAlertArtemisa";
            case "mayabeque":
                return "@TuEnvioComboAlertMayabeque";
            case "matanzas":
                return "@TuEnvioComboAlertMatanzas";
            case "cienfuegos":
                return "@TuEnvioComboAlertCienfuegos";
            case "villaclara":
                return "@TuEnvioComboAlertVillaclara";
            case "sancti":
                return "-1001494280689";
        }
    },
    get_province_btn: function () {
        return buttons = {
            reply_markup: {
                inline_keyboard: [
                    [{text: "Pinar del Rio", url: 'https://t.me/TuEnvioComboAlertPinar'}],
                    [{text: "Artemisa", url: 'https://t.me/TuEnvioComboAlertArtemisa'}],
                    [{text: "La Habana", url: 'https://t.me/tuEnvioComboAlertHabana'}],
                    [{text: "Mayabeque", url: 'https://t.me/tuEnvioComboAlertMayabeque'}],
                    [{text: "Matanzas", url: 'https://t.me/tuEnvioComboAlertMatanzas'}],
                    [{text: "Cienfuegos", url: 'https://t.me/TuEnvioComboAlertCienfuegos'}],
                    [{text: "Villa Clara", url: 'https://t.me/tuEnvioComboAlertVillaclara'}],
                    [{text: "Sancti Spiritus", url: 'https://t.me/joinchat/AAAAAFkQ6fFNTbfmRkSfSQ'}],
                    [{text: "Ciego de Avila", url: 'https://t.me/tuEnvioComboAlertCiego'}]
                ]
            }
        }
    }
}
