IMAGE_NAME = "ubuntu/trusty64" 
NODE_NAME = "ubuntu"



Vagrant.configure("2") do |config|


    config.vm.provider "virtualbox" do |v|
        v.memory = 2048
        v.cpus = 2
    end
    config.vm.synced_folder "./", "/home/vagrant"
    config.ssh.insert_key = true
    config.ssh.forward_agent = true


    config.vm.define NODE_NAME do |master|     

        master.vm.box = IMAGE_NAME
        #master.vm.network "private_network", ip: "192.168.50.10"
        master.vm.network "private_network", ip: "192.168.100.10", virtualbox__intnet: "intnet"
        master.vm.hostname = NODE_NAME
        master.vm.provision "ansible_local" do |ansible|
            ansible.playbook = "playbook.yaml"
        end
    end
end