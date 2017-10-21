module.exports = {

    give_answer: function (index, user) {
            var message = 'Oush! '

            switch (index){
                case 1: 
                    message = 'Tiens'+ ' ' + user + ', un bon panini de chez Momo!';
                    message += '\nhttps://cdn.discordapp.com/attachments/370239824088793091/370245369986154507/image.png';
                    break;
                case 2:
                    message += 'https://www.youtube.com/watch?v=TLja7EJiOQU';
                    break;
                case 3:
                    message = 'HANA HANA HANA HANA HANA HANA';
                    message += '\nhttps://media.discordapp.net/attachments/370239824088793091/370242991757197312/colo_sans_fond.gif';
                    break;
                 case 4:
                    message = 'https://media.discordapp.net/attachments/370239824088793091/370282367719440386/image.png';
                    break;
                default:
                    break;
            }

            return message;
        },

    momo_panini : function (message) {}

}
