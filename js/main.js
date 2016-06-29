$(function ()
{
  var jqconsole = $('#console').jqconsole('Hi, I\'m Nick\nEnter \'nick\' to get started. Then try \'help\' for more\n', '~$ ');

  function process(input)
  {
    switch(input)
    {
      case "./get_free_wifi":
        // loops wont work for some reason
        setTimeout(function(){jqconsole.Write(text.wifiStream[0], 'jqconsole-output', false);}, 1000);
        setTimeout(function(){jqconsole.Write(text.wifiStream[1], 'jqconsole-output', false);}, 3000);
        setTimeout(function(){jqconsole.Write(text.wifiStream[2], 'jqconsole-output', false);}, 5000);
        setTimeout(function(){jqconsole.Write(text.wifiStream[3], 'jqconsole-output', false);}, 7000);
        setTimeout(function(){jqconsole.Write(text.wifiStream[4], 'jqconsole-output', false);}, 9000);
        setTimeout(function(){jqconsole.Write(text.wifiStream[5], 'jqconsole-output', false);}, 11000);
        setTimeout(function(){jqconsole.Write(text.wifiStream[6], 'jqconsole-output', false);}, 13000);
        setTimeout(function(){jqconsole.Write(text.wifiStream[7], 'jqconsole-output', false);}, 15000);
        setTimeout(function(){jqconsole.Write(text.wifiStream[8], 'jqconsole-output', false);}, 17000);
        setTimeout(function(){jqconsole.Write(text.wifiStream[9], 'jqconsole-output', false);}, 19000);
        setTimeout(function(){jqconsole.Write(text.wifiStream[10], 'jqconsole-output', false);}, 21000);
        setTimeout(function(){jqconsole.Write(text.wifiStream[11], 'jqconsole-output', false);}, 23000);
        setTimeout(function(){jqconsole.Write(text.wifiStream[12], 'jqconsole-output', false);}, 25000);
        setTimeout(function(){jqconsole.Write(text.wifiStream[13], 'jqconsole-output', false);}, 27000);
        setTimeout(function(){jqconsole.Write(text.wifiStream[14], 'jqconsole-output', false);}, 29000);
        setTimeout(function(){jqconsole.Write(text.wifiStream[15], 'jqconsole-output', false);}, 33000);
        setTimeout(function(){jqconsole.Write(text.wifiStream[16], 'jqconsole-output', false);}, 33000);
        return ""
      case "cd launch_codes":
        return text.launchCodes;
      case "ls":
        return text.ls;
      case "help":
        return text.help;
      case "nick":
        return text.nick;
      case "projects":
        return text.projects;
      case "contact":
        return text.contact;
      case "alt":
        window.location="http://nickwn.github.io/alt";
        return text.alt;
      default:
        return text.notRight;
    }
  }

  var startPrompt = function ()
  {
    jqconsole.Prompt(true, function (input)
    {
      if(input) jqconsole.Write(process(input), 'jqconsole-output', false);
      else jqconsole.Write(text.notRight, 'jqconsole-output');
      startPrompt();
    });
  };

  startPrompt();
});
