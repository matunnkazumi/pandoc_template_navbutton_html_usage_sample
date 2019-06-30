const util = require('util');
const childProcess = require('child_process');
const exec = util.promisify(childProcess.exec);
const fs = require("fs");
const less = require("less");

const src_file_name = 'sample_source.md';
const output_html_file_name = 'publish/index.html';

function read_svgfile_and_escape_for_command(path) {
    return fs.readFileSync(path).toString().replace(/"/g, '\'');
}

async function build_html() {
    const tmp_file_name = 'temp.css';

    const lessSrc = fs.readFileSync('pandoc_template_navbutton_html/style.less');
    const lessOptions = {
	modifyVars: {
	    "primary": "#6495ed",
	    "primary-variant": "#2e8b57",
	    "secondary": "#32cd32",
	    "secondary-variant": "#ffd700",
	    "background": "white",
	    "surface": "#f8f8ff",
	    "error": "red",
	    "on-primary": "white",
	    "on-secondary": "white",
	    "on-background": "black",
	    "on-surface": "black",
	    "on-error": "white",	  
	},
    };
    const css = await less.render(lessSrc.toString(), lessOptions);
    fs.writeFileSync(`${tmp_file_name}`, `<style type="text/css">${css.css}</style>`);

    const to_top_icon_svg = read_svgfile_and_escape_for_command('material-design-icons/navigation/svg/production/ic_arrow_upward_24px.svg');
    const menu_toggle_icon_svg = read_svgfile_and_escape_for_command('material-design-icons/navigation/svg/production/ic_menu_24px.svg');

    const pandocCmd =
	  [
	      `pandoc`,
	      `${src_file_name}`,
	      `-t html5`,
	      `--template=pandoc_template_navbutton_html/template.html`,
	      `-s`,
	      `--section-divs`,
	      `--toc`,
	      `-V to_top_icon="${to_top_icon_svg}"`,
	      `-V menu_toggle_icon="${menu_toggle_icon_svg}"`,
	      `-H ${tmp_file_name}`,
	      `-A footer.txt`,
	      `-o ${output_html_file_name}`,
	  ].join(' ');
    await exec(pandocCmd);

    await exec(`rm ${tmp_file_name}`);
}

async function build() {
    await build_html();
}

build().catch(e => console.log(e));
