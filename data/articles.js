function ReadArticles(d, flag060, flag070, flag080, flag090, flag100, flag110) {
  if (flag060) { Array.prototype.push.apply(d, articles060); }
  if (flag070) { Array.prototype.push.apply(d, articles070); }
  if (flag080) { Array.prototype.push.apply(d, articles080); }
  if (flag090) { Array.prototype.push.apply(d, articles090); }
  if (flag100) { Array.prototype.push.apply(d, articles100); }
  if (flag110) { Array.prototype.push.apply(d, articles110); }
}

function GetArticlesCount() {
  return articles060.length +  articles070.length +  articles080.length + articles090.length + articles100.length + articles110.length;
}