
function secretSanta() {
  var people = ['pat','noah','robin','nathan','suvi','dena','luke','judy'];
  var SuccessfulPairsObject = [];
  var attemptedPairs = people.slice(0)

  people.forEach(function(giver) {
    function blockMatches(recipient) {
      if (giver === recipient) {
        return false
      } else if (
        (giver === 'pat' && recipient === 'suvi') || (giver === 'suvi' && recipient === 'pat') ||
        (giver === 'noah' && recipient === 'dena') || (giver === 'dena' && recipient === 'noah') ||
        (giver === 'nathan' && recipient === 'robin') || (giver === 'robin' && recipient === 'nathan')
      ) {
        return false
      } else {
        return true
      }
    }

    var peopleMinusGiver = attemptedPairs.filter(blockMatches)
    var randomIndex = Math.floor(Math.random()*peopleMinusGiver.length);
    SuccessfulPairsObject.push([giver, peopleMinusGiver[randomIndex].toString()])
    attemptedPairs.splice(attemptedPairs.indexOf(peopleMinusGiver[randomIndex]),1)
  });

  var outputString = []
  Object.values(SuccessfulPairsObject).forEach(function(element){
    outputString.push(element.join(' : '))
  });
  outputString = outputString.join(' | ')
  return outputString
}

$(document).ready(function() {
  $('.output').text(secretSanta())
});
