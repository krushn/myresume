<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Project_model extends CI_Model
{
    public $table = 'projects';

    public function get_list($offset, $limit)
    {
        return $this->db->get($this->table, $limit, $offset)->result();
    }
    
    public function count_all()
    {
        return $this->db->count_all($this->table);
    }
    
    public function get_all()
    {
        $this->db->where('status', 1);
        $this->db->order_by('sort_order');
        return $this->db->get($this->table)->result();
    }
    
    public function get($id)
    {
        return $this->db->where('project_id', $id)->get($this->table)->row();
    }
  
    public function add($data)
    {
        $this->db->insert($this->table, $data);
        return $this->db->insert_id();
    }

    public function update($id, $data)
    {
        return $this->db->where('project_id', $id)->update($this->table, $data);
    }

    public function delete($id)
    {
        $this->db->where('project_id', $id)->delete($this->table);
        return $this->db->affected_rows();
    }

}

/* End of file Project_model.php */
/* Location: ./application/models/Project_model.php */