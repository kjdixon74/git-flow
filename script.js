"use strict";

const workflow = document.getElementById("workflow");

const list = `<ol>
<li>Fork</li>
<li>Clone</li>
<li>Git Add</li>
<li>Git Commit</li>
<li>Git Push</li>
<li>Pull Request</li>
</ol>`;

workflow.insertAdjacentHTML("beforeend", list);
