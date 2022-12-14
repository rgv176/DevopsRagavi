
Vagrant.configure("2") do |config|

  if Vagrant.has_plugin?("vagrant-vbguest")
    config.vm.provider :virtualbox do |vb|
      config.vbguest.auto_update = false
    end
  end

  # Define the VM
  config.vm.define "centos_server" do |server|
    # Specify the Vagrant box to use
    server.vm.box = "generic/centos7"
    #server.vm.synced_folder "./","/home/vagrant/project", type:"virtualbox"
    # Specify the VM specs when using the Virtualbox provisioner
    server.vm.provider "virtualbox" do |vb|
      vb.name =  "centos.server.local"
      # VM RAM in MB
      vb.memory = 2048
      # VM CPUs
      vb.cpus = 1
    end
    server.vm.synced_folder ".", "/vagrant"

    server.vm.provision "ansible_local" do |ansible|
      ansible.playbook = "playbook.yml"
      #ansible.install=true
      #ansible.install_mode="pip"
      #ansible.pip_install_cmd="curl https://bootstrap.pypa.io/pip/3.5/get-pip.py | sudo python"
    end 
  end
end