module.exports = {
    get_chat_id_by_province: function (province) {
        switch (province) {
            case "Habana":
                return "@TuEnvioComboAlertHabana";
        }
    },
    get_province_btn: function () {
        return buttons = {
            reply_markup: {
                inline_keyboard: [
                    [
                        {text: "La Habana", url: 'https://t.me/tuEnvioComboAlertHabana'},
                    ]
                ]
            }
        }
    }
}
