module.exports = {
    get_chat_id_by_province: function (province) {
        switch (province) {
            case "habana":
                return "@TuEnvioComboAlertHabana";
            case "ciego":
                return "@TuEnvioComboAlertCiego";
            case "test":
                return "@tuEnvioComboSearchTestChanel";
        }
    },
    get_province_btn: function () {
        return buttons = {
            reply_markup: {
                inline_keyboard: [
                    [{text: "La Habana", url: 'https://t.me/tuEnvioComboAlertHabana'},],
                    [{text: "Ciego de Avila", url: 'https://t.me/tuEnvioComboAlertCiego'},]
                ]
            }
        }
    }
}
