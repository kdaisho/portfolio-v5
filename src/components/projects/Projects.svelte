<script lang="ts">
	import { projects, filterItems } from "./data"
</script>

<div id="projects" class="content-wrap is-side-by-side scroll-to">
	<div class="right-side">
		<div class="title-group has-filters">
			<h2 class="title">Side Projects</h2>
			<p class="subtitle font-large">
				Getting my hands dirty with technologies I don't have a chance to work within my day job
				helps me stay up to date.
			</p>
		</div>
		<fieldset class="filter-section ">
			<button class="toggle-filter outline-button">Filters</button><legend>(AND) Filters</legend>
			<div class="filters">
				<label class="tag "><input type="checkbox" name="live" /><span class="dummy" />Live</label
				><label class="tag "
					><input type="checkbox" name="vanillajs" /><span class="dummy" />VanillaJs</label
				><label class="tag "
					><input type="checkbox" name="nodejs" /><span class="dummy" />Nodejs</label
				><label class="tag "
					><input type="checkbox" name="react" /><span class="dummy" />React</label
				><label class="tag "
					><input type="checkbox" name="angular" /><span class="dummy" />Angular</label
				><label class="tag "><input type="checkbox" name="sass" /><span class="dummy" />Sass</label
				><label class="tag "><input type="checkbox" name="less" /><span class="dummy" />Less</label
				><label class="tag "
					><input type="checkbox" name="cssGrid" /><span class="dummy" />Css Grid</label
				><label class="tag "><input type="checkbox" name="php" /><span class="dummy" />PHP</label
				><label class="tag "
					><input type="checkbox" name="mongodb" /><span class="dummy" />mongoDB</label
				>
			</div>
		</fieldset>
	</div>
	<div class="cards left-side">
		<div class="card " role="button" tabindex="0">
			<div
				class="top"
				style="background: rgb(68, 68, 68) url(&quot;https://daishodesign.com/616c09566ea793d6460917a8a70abbac.jpg&quot;) center center / cover no-repeat;"
			>
				<div class="glass" />
			</div>
			<div class="bottom">
				<div class="text-group">
					<h2 class="title">JavaScriptBest</h2>
					<span class="separator" />
					<p class="desc">Online Course Review App</p>
				</div>
			</div>
		</div>
		<div class="card " role="button" tabindex="0">
			<div
				class="top"
				style="background: rgb(68, 68, 68) url(&quot;https://daishodesign.com/55f5799135e2e1d1827fe7013d5034ca.jpg&quot;) center center / cover no-repeat;"
			>
				<div class="glass" />
			</div>
			<div class="bottom">
				<div class="text-group">
					<h2 class="title">Portofolio</h2>
					<span class="separator" />
					<p class="desc">My portofolio</p>
				</div>
			</div>
		</div>
		<div class="card " role="button" tabindex="0">
			<div
				class="top"
				style="background: rgb(68, 68, 68) url(&quot;https://daishodesign.com/2f54e424147c9fc4cf5a28100fae5a3d.jpg&quot;) center center / cover no-repeat;"
			>
				<div class="glass" />
			</div>
			<div class="bottom">
				<div class="text-group">
					<h2 class="title">Quebec3</h2>
					<span class="separator" />
					<p class="desc">Blog</p>
				</div>
			</div>
		</div>
		<div class="card " role="button" tabindex="0">
			<div
				class="top"
				style="background: rgb(68, 68, 68) url(&quot;https://daishodesign.com/481d638d404828f2608a3a55759f1ffd.jpg&quot;) center center / cover no-repeat;"
			>
				<div class="glass" />
			</div>
			<div class="bottom">
				<div class="text-group">
					<h2 class="title">My Brailler</h2>
					<span class="separator" />
					<p class="desc">Electronic braille typewriter</p>
				</div>
			</div>
		</div>
		<div class="card " role="button" tabindex="0">
			<div
				class="top"
				style="background: rgb(68, 68, 68) url(&quot;https://daishodesign.com/f6a015ef74b9461f6046562a654ef088.jpg&quot;) center center / cover no-repeat;"
			>
				<div class="glass" />
			</div>
			<div class="bottom">
				<div class="text-group">
					<h2 class="title">Email Builder</h2>
					<span class="separator" />
					<p class="desc">HTML email builder for someone busy</p>
				</div>
			</div>
		</div>
		<div class="card " role="button" tabindex="0">
			<div
				class="top"
				style="background: rgb(68, 68, 68) url(&quot;https://daishodesign.com/7a73c3104776238ac2a2b085d85188fc.jpg&quot;) center center / cover no-repeat;"
			>
				<div class="glass" />
			</div>
			<div class="bottom">
				<div class="text-group">
					<h2 class="title">Suicide in Japan</h2>
					<span class="separator" />
					<p class="desc">Data visualization for a Halloween project</p>
				</div>
			</div>
		</div>
		<div class="card " role="button" tabindex="0">
			<div
				class="top"
				style="background: rgb(68, 68, 68) url(&quot;https://daishodesign.com/6b059c90eb57f574c0f058ff0bd65161.jpg&quot;) center center / cover no-repeat;"
			>
				<div class="glass" />
			</div>
			<div class="bottom">
				<div class="text-group">
					<h2 class="title">French Formatter</h2>
					<span class="separator" />
					<p class="desc">Saves you from French grammar police</p>
				</div>
			</div>
		</div>
		<div class="card " role="button" tabindex="0">
			<div
				class="top"
				style="background: rgb(68, 68, 68) url(&quot;https://daishodesign.com/30444e9931fed344dbf13f5b38c4ca21.jpg&quot;) center center / cover no-repeat;"
			>
				<div class="glass" />
			</div>
			<div class="bottom">
				<div class="text-group">
					<h2 class="title">Global Countdown Timer</h2>
					<span class="separator" />
					<p class="desc">Everybody ends at the same time anywhere on earth</p>
				</div>
			</div>
		</div>
		<div class="card " role="button" tabindex="0">
			<div
				class="top"
				style="background: rgb(68, 68, 68) url(&quot;https://daishodesign.com/6e8f1a63fbf92e7b5864c9530c84bb06.jpg&quot;) center center / cover no-repeat;"
			>
				<div class="glass" />
			</div>
			<div class="bottom">
				<div class="text-group">
					<h2 class="title">Japanese Drum Kit</h2>
					<span class="separator" />
					<p class="desc">For fun</p>
				</div>
			</div>
		</div>
		<div class="card " role="button" tabindex="0">
			<div
				class="top"
				style="background: rgb(68, 68, 68) url(&quot;https://daishodesign.com/7907dc68375553189f431d04bbe4ff10.jpg&quot;) center center / cover no-repeat;"
			>
				<div class="glass" />
			</div>
			<div class="bottom">
				<div class="text-group">
					<h2 class="title">Archive Everything</h2>
					<span class="separator" />
					<p class="desc">Archiving tool using file system</p>
				</div>
			</div>
		</div>
	</div>
</div>
