<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Portfolio_model extends CI_Model
{
    public $table = 'portfolio';

    public function get_list($offset, $limit)
    {
        return $this->db->get($this->table, $limit, $offset)->result_array();
    }
    
    public function count_all()
    {
        return $this->db->count_all($this->table);
    }
    
    public function get_all()
    {
        $this->db->where('status', 1);
        $this->db->order_by('sort_order');
        return $this->db->get($this->table)->result_array();
    }
    
    public function get($image_id)
    {
        return $this->db->where('image_id', $image_id)->get($this->table)->row_array();
    }
  
    public function add($data)
    {
        $this->db->insert($this->table, $data);
        return $this->db->insert_id();
    }

    public function update($image_id, $data)
    {
        return $this->db->where('image_id', $image_id)->update($this->table, $data);
    }

    public function delete($image_id)
    {
        $this->db->where('image_id', $image_id)->delete($this->table);
        return $this->db->affected_rows();
    }

}

/* End of file Project_model.php */
/* Location: ./application/models/Project_model.php */