const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = "!";

client.on("ready", () => {
    console.log("Logged in as " + client.user.username + "#" + client.user.discriminator + "!");
    client.user.setActivity("anime w/ friends", {type: "WATCHING"});
});

client.on("message", (msg) => {
    
    if(msg.content.toLowerCase() === prefix + "help"){
        let helpEmbed = new Discord.MessageEmbed()
        .setColor([255, 0, 255])
        .setTitle("Help Page ;)")
        .setAuthor(client.user.username, client.user.avatarURL())
        .setFooter("This mess was made by " + client.users.cache.get("696054080556236852").username + "#" + client.users.cache.get("696054080556236852").discriminator, client.users.cache.get("696054080556236852").avatarURL())
        .addField(prefix + "help", "Returns this silly")
        .addField(prefix + "uwuify [message]", "Send your message but \"u\" is replaced with \"w\"")
        .addField(prefix + "caramelldansen", "Plays the song \"Caramelldansen\". (Must be in a voice channel)")
        .addField(prefix + "rickroll [mention]", "Joins victim's voicechannel and rickrolls them!")

        msg.channel.send(helpEmbed);
    }
    
    if(msg.content.toLowerCase().startsWith(prefix + "uwuify ")){
        let rawText = msg.content.substring(8);
        let uwuifiedText = rawText.split("u").join("w");
        let uwuifiedText1 = uwuifiedText.split("U").join("W");
        let everyoneFix = uwuifiedText1.split("@everyone").join("(at)everyone");

        msg.channel.send(everyoneFix);
    }

    if(msg.content.toLowerCase() === "i'm your waifu" || msg.content.toLowerCase() === "i am your waifu"){
        msg.channel.send("No, I am!!!");
    }else{
        if(msg.content.toLowerCase().startsWith("i am") || msg.content.toLowerCase().startsWith("i'm")){
            msg.channel.send("And I'm your waifu <3");
        }
    }

    if(msg.content.toLowerCase() === prefix + "caramelldansen"){
        if(msg.member.voice.channel){
            msg.member.voice.channel.join().then(connection => {
                let dispatcher = connection.play("caramelldansen.mp3");
            });
        }else{
            msg.channel.send("Sowwy Senpai you're not in a voice channel right now ;(");
        }
    }

    if(msg.content.toLowerCase().startsWith(prefix + "rickroll")){
        if(msg.mentions.members.first()){
            if(msg.mentions.members.first().voice.channel){
                msg.mentions.members.first().voice.channel.join().then(connection => {
                    let dispatcher = connection.play("animerickroll.mp3");
                });
            }else{
                msg.channel.send("The victim is not in a voice channel unfortunatly! :(");
            }
        }else{
            msg.channel.send("You need to ping the person to rickroll pwease :)")
        }
    }

});

client.login(""); // TODO: insert token here