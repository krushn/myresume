<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Upload extends CI_Controller {

    public function __construct() {
        parent::__construct();
    }

    function index() {
        
        $config['upload_path'] = FCPATH.'upload/';
                
        $config['allowed_types'] = 'gif|jpg|png';
//        $config['max_size'] = '100';
//        $config['max_width'] = '1024';
//        $config['max_height'] = '768';

        $this->load->library('upload', $config);

        if (!$this->upload->do_upload('file')) {
            $json = array('error' => $this->upload->display_errors());
        } else {
            $json = array('upload_data' => $this->upload->data());
            
            $this->load->library('image_lib');

            $config['image_library'] = 'gd2';
            $config['source_image'] = $config['upload_path'].$json['upload_data']['file_name'];
            $config['new_image'] = $config['upload_path'].'thumbs/'.$json['upload_data']['file_name'];
            //$config['create_thumb'] = TRUE;
            $config['maintain_ratio'] = false;
            $config['width']    = 215;
            $config['height']   = 215;

            $this->image_lib->clear();
            $this->image_lib->initialize($config);
            $this->image_lib->resize();
        }
        
        echo json_encode($json);
    }
}
