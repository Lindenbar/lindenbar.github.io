let target = document.querySelector('#my-projects .block-content');

fetch('json/projects.json')
    .then(response => response.json())
    .then(projects => {
        projects.forEach(project => {
            jQuery.get(project.text, function(data) {
                target.innerHTML += `<div class="project">
                                        <article class="project-article">${project.article}</article>
                                        <div class="project-preview">
                                            <a href="${project.link}" target="_blank">
                                                <img alt="${project.article}" src="${project.preview}"/>
                                            </a>
                                            ${data}
                                            <div style="clear:both;"></div>
                                        </div>   
                                     </div>        
                                    `
            });
        });
    });

