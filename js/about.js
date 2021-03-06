$(document).ready(function(){
  var line1=[[1800, 1], [1850, 1.3], [1900, 1.7],
      [1910, 1.8], [1920, 1.9], [1930, 2.1], [1940, 2.3],
      [1950, 2.5], [1955, 2.8], [1960, 3], [1965, 3.3],
      [1970, 3.7], [1975, 4.1], [1980, 4.5], [1985, 4.9],
      [1990, 5.3], [1995, 5.7], [2000, 6.1], [2005, 6.5],
      [2010, 6.9], [2015, 7.2], [2020, 7.7], [2025, 8],
      [2030, 8.3], [2040, 8.9], [2050, 9.3], [2060, 9.6]];
  var plot1 = $.jqplot('population-chart', [line1], {
      title:'World Population (billions)',
      axes:{
        xaxis:{
          tickOptions:{
            formatString:'%d'
          } 
        },
        yaxis:{
          tickOptions:{
            formatString:'%.1f'
            }
        }
      },
      highlighter: {
        show: true,
        sizeAdjust: 7.5
      }
  });
});