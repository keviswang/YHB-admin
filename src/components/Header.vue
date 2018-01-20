<template>
	<navbar>
		<button class="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" @click="mobileSidebarToggle">&#9776;</button>
		<a class="navbar-brand"></a>
		<ul class="nav navbar-nav d-md-down-none">
			<li class="nav-item">
				<a class="nav-link navbar-toggler sidebar-toggler" @click="sidebarMinimize">&#9776;</a>
			</li>

		</ul>
		<!-- <Menu mode="horizontal" class="headerZ" :theme="theme1" style=" color:#fff;	" active-name="1" v-for="(x,index) in header_Routers">
        <MenuItem name="1">
            内容管理
        </MenuItem>
        <MenuItem name="2">
            用户管理
        </MenuItem>
        
        <MenuItem name="4">
            综合设置
        </MenuItem>
    </Menu> -->

		<ul class="nav navbar-nav d-md-down-none topRouters">

			<li class="nav-item header-item " v-for="(x,index) in header_Routers" @click="active(x,index)">

				<router-link tag="div" :to='x.path' style="" class="nav-link">
					<p>
						<!-- <Icon :type="x.icon" size='30' color="#2d8cf0"></Icon> -->
					</p>
					<p style="color:white"> {{x.name}} </p>
				</router-link>
			</li>
			<!-- <li class="nav-item header-item">

				<router-link tag="div" to='/home1' style="height:55px;" class="nav-link">
					<p>
						<Icon type="stats-bars" size='30' color="#2d8cf0"></Icon>
					</p>
					<p style="color:white"> 浏览排行 </p>
				</router-link>

			</li>

			<li class="nav-item header-item">

				<Dropdown>
					<router-link tag="div" to='/' style="height:55px;" class="nav-link">
						<p>
							<Icon type="android-cloud" size='30' color="#2d8cf0"></Icon>
						</p>
						<p style="color:white"> 云服务器 </p>
					</router-link>
					<DropdownMenu slot="list">
						<DropdownItem>Linux</DropdownItem>
						<DropdownItem>Mac OS X</DropdownItem>
						<DropdownItem>Windows</DropdownItem>

						<DropdownItem>Core OS</DropdownItem>
					</DropdownMenu>
				</Dropdown>

			</li>

			<li class="nav-item header-item">

				<router-link tag="div" to='/home1' style="height:55px;" class="nav-link">
					<p>
						<Icon type="trophy" size='30' color="#2d8cf0"></Icon>
					</p>
					<p style="color:white"> 销量排行 </p>
				</router-link>

			</li> -->

		</ul>

		<ul class="nav navbar-nav ml-auto">

			<li class="nav-item d-md-down-none">
				<a class="nav-link">
					<Icon type="android-notifications" size="20"></Icon>
					<span class="badge badge-pill badge-danger">5</span>
				</a>
			</li>

			<Dropdown class="nav-item">
				<a href="javascript:void(0)">
					<span slot="button">
						<img src="../../static/img/avatars/favoritePerson.jpg" style="width: 50px;height: 50px;" class="img-avatar" alt="o">
						<span class="d-md-down-none">admin</span>
					</span>
				</a>
				<Dropdown-menu slot="list">
					<Dropdown-item>
						<p class="dropdown-itemp">
							<Icon type="alert"></Icon>Updates
							<span class="badge badge-info">42</span>
						</p>

					</Dropdown-item>
					<Dropdown-item>
						<p class="dropdown-itemp">
							<Icon type="chatbox-working"></Icon>Messages
							<span class="badge badge-success">42</span>
						</p>

					</Dropdown-item>
					<Dropdown-item>
						<p class="dropdown-itemp">
							<Icon type="chatbox-working"></Icon>Messages
							<span class="badge badge-danger">42</span>
						</p>

					</Dropdown-item>
					<Dropdown-item divided>
						<p class="dropdown-itemp">
							<Icon type="android-contact"></Icon> Profile</p>

					</Dropdown-item>
					<Dropdown-item>
						<p class="dropdown-itemp">
							<Icon type="android-settings"></Icon> Settings</p>
					</Dropdown-item>

					<Dropdown-item>
						<a href="" @click="Logout">
							<p class="dropdown-itemp">
								<Icon type="power"></Icon>Logout</p>
						</a>
					</Dropdown-item>

				</Dropdown-menu>
			</Dropdown>

			<li class="nav-item d-md-down-none">
				<a class="nav-link navbar-toggler aside-menu-toggler" @click="asideToggle">&#9776;</a>
			</li>
		</ul>
	</navbar>
</template>
<script>
import navbar from "./Navbar";
import { mapGetters } from 'vuex'
export default {
    name: "homeHeader",
    components: {
        navbar
	},
	data(){
		return {
			theme1:'light'
		}
		
	},
	computed: {
		...mapGetters(['header_Routers'])
	},
    methods: {
        Logout(e) {
            e.preventDefault();
            this.$store
                .dispatch("LogOut")
                .then(() => {
                    this.$router.push({ path: "/login" });
                })
                .catch(err => {
                    this.$message.error(err);
                });
        },
        click() {
            // do nothing
        },
        sidebarToggle(e) {
            e.preventDefault();
            document.body.classList.toggle("sidebar-hidden");
        },
        sidebarMinimize(e) {
            e.preventDefault();

            document.body.classList.toggle("sidebar-minimized");
        },
        mobileSidebarToggle(e) {
            e.preventDefault();

            document.body.classList.toggle("sidebar-mobile-show");
        },
        asideToggle(e) {
            e.preventDefault();
            document.body.classList.toggle("aside-menu-hidden");
		},
		active(x,index) {
			console.log(document.getElementsByClassName('header-item')[index]);
			
		}
	},
	mounted() {
		// console.log(this.header_Routers);
	}
};
</script>

<style lang="scss" scoped>
.dropdown-itemp {
    text-align: left;
    font-size: 15px;
    padding: 10px;
}

.header-item .ivu-dropdown-item {
    padding: 15px;
}
.topRouters{
	position: absolute;
	right: 11.0625rem;
}
// .nav-link{
// 	width: 3.4375rem;
// }
.header-item {
	width: 6.25rem;
	.nav-link{
		line-height: 3.4375rem;
	}
    /*background-color: #20a8d8;*/
    /*background-color: white;*/
	
    height: 55px;
}
 a {
    color: rgb(218, 212, 212) !important;
}


</style>
